import { IMovie } from "../../models/Movie";

let movies: IMovie[] = [
{
    Title: "Awesome",
    imdbID: "10",
    Type: "action",
    Poster: "...", 
    Year: "1992"},

{   Title: "Lame", 
    imdbID: "1",
    Type: "comedy",
    Poster: "...", 
    Year: "1999"},
];

export const getData = async (searchText: string): Promise<IMovie[]> => {
    return new Promise((resolve) => {
        if (searchText !== ""){ 
            resolve (movies);
        } else {
            resolve([]); //ändra till reject
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