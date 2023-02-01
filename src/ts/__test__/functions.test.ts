/**
 * @jest-environment jsdom
 */
// import { movieSort } from "../functions";
// import { movies } from "../movieApp";

// jest.mock("./../services/movieservice.ts");

// test('should print HTML correctly', async () => {

//     await movieSort(movies);
//     expect(movies[0].Title).toBe("The Front End struggle");
//   })

import { IMovie } from "../models/Movie";
import * as func from "../functions";
// import { IMovie } from "./models/Movie";

// export const movieSort = (movies: IMovie[], desc: boolean = true) => {
//   return movies.sort((a: IMovie, b: IMovie) => {
//     if (desc) {
//       if (a.Title > b.Title) return 1;
//       if (a.Title < b.Title) return -1;

//       return 0;
//     } else {
//       if (a.Title > b.Title) return -1;
//       if (a.Title < b.Title) return 1;

//       return 0;
//     }
//   });
// };

test("test sorting", ()=> {
    let movies: IMovie[] = [
        {Title: "A-Team", imdbID: "10", Type: "action", Poster: "", Year: "1992"},
        {Title: "Bee Movie", imdbID: "1", Type: "comedy", Poster: "", Year: "1999"},
        {Title: "Contane", imdbID: "1", Type: "comedy", Poster: "", Year: "1999"},
        ];

        func.movieSort(movies, true);

        expect(movies[0].Title).toBe("A-Team");
})
