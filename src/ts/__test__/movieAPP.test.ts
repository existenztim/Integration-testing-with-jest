/**
 * @jest-environment jsdom
 */

import * as movie from "../movieApp";

jest.mock("./../services/movieservice.ts");

describe('test function handleSubmit', () => {
  test('should print HTML correctly', async () => {
   
    document.body.innerHTML = /*html*/`
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" value="" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;
  
    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "test";

    await movie.handleSubmit();

    expect(movie.movies[0].Title).toBe("Awesome");
  })

  test('should print HTML correctly', async () => {
   
    document.body.innerHTML = /*html*/`
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" value="" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;
  
    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "";

    await movie.handleSubmit();
    console.log(movie.movies);
    expect(movie.movies.length).toBe(0);
  })


})
  