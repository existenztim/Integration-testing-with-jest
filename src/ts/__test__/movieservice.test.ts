import { getData } from "../services/movieservice";

jest.mock("axios", () =>({
    get: async (url: string) => {
        return new Promise((resolve,reject) => {
            if(url.endsWith("error")) {
                reject([]);
            }
            else {
                resolve([{
                    Title: "Awesome",
                    imdbID: "10",
                    Type: "action",
                    Poster: "...", 
                    Year: "1992"},
                
                {   Title: "Lame", 
                    imdbID: "1",
                    Type: "comedy",
                    Poster: "...", 
                    Year: "1999"},]);
            }
        }) 
    }
}))

    test("should get data correctly", async () =>{
        let data = await getData("test");
    })

    test("should get error getting data", async ()=> {
        try {
            let data = await getData("error");
        }
        catch (error:any) {
            expect(error.length).toBe(0);
        }
    });