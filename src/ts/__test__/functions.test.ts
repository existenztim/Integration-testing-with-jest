import { IMovie } from "../models/Movie";
import * as functions from "../functions";

/*****************************************************
 *                   movieSort
 ****************************************************/

describe("Tests for function movieSort", () => {
    test("Test if sorting is correct when desc is true (descending sort)", () => {

        let testData: IMovie[] = [
            {
                Title: "E-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "B-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "A-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "C-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            // 2 Identical objects to test that sorting return 0.
            {
                Title: "D-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },

            {
                Title: "D-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            }
        ];

        const sortList: IMovie[] = functions.movieSort(testData, true);

        expect(sortList[0].Title).toBe("A-Titel");
        expect(sortList[5].Title).toBe("E-Titel");
    });

    test("Test if sorting is correct when desc is false (ascending sort)", () => {

        let testData: IMovie[] = [
            {
                Title: "E-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "B-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "A-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "C-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            // 2 Identical objects to test that sorting return 0.
            {
                Title: "D-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },

            {
                Title: "D-Titel",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            }
        ];

        const sortList: IMovie[] = functions.movieSort(testData, false);

        expect(sortList[0].Title).toBe("E-Titel");
        expect(sortList[5].Title).toBe("A-Titel");
    });
});
