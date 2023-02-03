/**
* @jest-environment jsdom 
*/

import * as movApp from '../movieApp';
import * as movServ from '../services/movieservice';
import { IMovie } from '../models/Movie';
import { mockMovies } from '../services/__mocks__/movieservice';

beforeEach(() => {
    document.body.innerHTML = "";
});

afterEach(() => {
    jest.restoreAllMocks();
    });

jest.mock("../services/movieservice");  

/*****************************************************
 *                   init
 ****************************************************/

describe("Tests for init()", () => {

    test("should call handleSubmit() when form is submitted", () => {

        document.body.innerHTML = /*html*/`
            <form id="searchForm">
                <input type="text" id="searchText" placeholder="Skriv titel här" />
                <div id="movie-container"></div>
            </form>
        `;
        const form = document.getElementById("searchForm") as HTMLFormElement;
        const preventDefault = jest.fn();
        const submitEvent = new Event("submit", {cancelable: true});
        (submitEvent as Event).preventDefault = preventDefault;

        const handleSubmitSpy = jest.spyOn(movApp, "handleSubmit").mockReturnValue(new Promise<void>((resolve) => {
            resolve();
        }));
    
        movApp.init();

        form.dispatchEvent(submitEvent);
    
        expect(handleSubmitSpy).toHaveBeenCalled();   
    });
});

/*****************************************************
 *                   handleSubmit
 ****************************************************/

describe("Tests for handleSubmit()", () => {
    test("Should return mockmovies[] and call createHtml() (try -> if)", async () => {
        
        const searchText:string ="some text";
        document.body.innerHTML = /*html*/`
            <input type="text" id="searchText" placeholder="Skriv titel här"  value="${searchText}" />
            <div id="movie-container"></div>
        `;
     
        const getDataSpy = jest.spyOn(movServ, "getData").mockReturnValue(Promise.resolve(mockMovies));
        const createHtmlSpy = jest.spyOn(movApp, "createHtml");
        
        await movApp.handleSubmit();

        expect(getDataSpy).toBeCalledTimes(1);
        expect(createHtmlSpy).toBeCalledTimes(1);
        expect(mockMovies[0].Title).toBe("A-Movie");
    });

    test("Should return empty array and call displayNoResult() (try -> else)", async () => {
        
        const searchText:string ="";
        document.body.innerHTML = /*html*/`
            <input type="text" id="searchText" placeholder="Skriv titel här" value = "${searchText}" />
            <div id="movie-container"></div>
        `;
        const mockMovies:IMovie[] = [];

        const getDataSpy = jest.spyOn(movServ, "getData").mockReturnValue(Promise.resolve(mockMovies));
        const displayNoResultSpy = jest.spyOn(movApp, "displayNoResult");

        await movApp.handleSubmit();

        expect(getDataSpy).toBeCalledTimes(1);
        expect(displayNoResultSpy).toBeCalledTimes(1);
        expect(mockMovies.length).toBe(0);  
    });

    test("Should reject promise (try -> catch)", async () => {
        
        const searchText:string = "error";
        document.body.innerHTML = /*html*/`
            <input type="text" id="searchText" placeholder="Skriv titel här" value = "${searchText}" />
            <div id="movie-container"></div>
        `;

        const displayNoResultSpy = jest.spyOn(movApp, "displayNoResult");

        await movApp.handleSubmit();

        expect(displayNoResultSpy).toBeCalledTimes(1);

    });
});

/*****************************************************
 *                   createHtml
 ****************************************************/

describe("Tests for createHtml()", () => {
    test("should create html for each item in array", () => {

        document.body.innerHTML = /*html*/`
        <div id="movie-container"></div>`;
        
        const movieContainer = document.getElementById("movie-container") as HTMLDivElement;

        movApp.createHtml(mockMovies, movieContainer);

        const movie1Title = document.getElementById('movie-container')?.children[0].children[0]; //selects .movie > h3
        const movie2Title  = document.getElementById('movie-container')?.children[1].children[0];
        expect(movie1Title?.innerHTML).toBe(mockMovies[0].Title);
        expect(movie2Title?.innerHTML).toBe(mockMovies[1].Title);
    });

    test("No html should be created", () => {
        
        document.body.innerHTML = /*html*/`
        <div id="movie-container"></div>`;
        
        const movieContainer = document.getElementById("movie-container") as HTMLDivElement;
        const emptyMovies:IMovie[] = [];
        
        movApp.createHtml(emptyMovies, movieContainer);

        expect(movieContainer.innerHTML).toBe("");
    });

});

/*****************************************************
 *                   displayNoResult
 ****************************************************/

test("Should create <p> with 'Inga sökresultat att visa' as innerHTML", () => {

    document.body.innerHTML = /*html*/
      `<div id="movie-container"></div>`;

    const movieContainer = document.querySelector("#movie-container") as HTMLDivElement;

    movApp.displayNoResult(movieContainer);

    const displayMessage = document.querySelector("#movie-container p")?.innerHTML;

    expect(movieContainer.innerHTML).toContain(displayMessage);
    expect(displayMessage).toBe("Inga sökresultat att visa");
});