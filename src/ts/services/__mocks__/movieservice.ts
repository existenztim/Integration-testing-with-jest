import { IMovie } from "../../models/Movie";

export let mockMovies: IMovie[] = [
    {
        Title: "A-Movie",
        imdbID: "1",
        Type: "action",
        Poster: "...",
        Year: "1992",
    },
    {
        Title: "B-Movie",
        imdbID: "2",
        Type: "comedy",
        Poster: "...",
        Year: "1999",
    },
    {
        Title: "C-Movie",
        imdbID: "3",
        Type: "horror",
        Poster: "...",
        Year: "2004",
    },
];

export async function getData(searchText: string): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
      if (searchText !== "") {
        resolve(mockMovies);
        } else {
        reject([]);
        }
    });
}

// export interface IMovie {
//     Title: string;
//     imdbID: string;
//     Type: string;
//     Poster: string;
//     Year: string;
//   }