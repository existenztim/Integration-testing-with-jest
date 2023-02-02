import { getData } from "../services/movieservice";
import {mockMovies} from "../services/__mocks__/movieservice";

jest.mock("axios", () =>({
    get: async (url: string) => {
        return new Promise((resolve,reject) => {
            if(url.endsWith("error")) {
                reject({data:[], status: 500});
            }
            else {
                resolve({ data:mockMovies, status: 200 }); 
            }
        }) 
    }
}))

    test("should get data correctly", async () =>{
        let data = await getData("test");
   
        // expect(data).toBe(4);
    })

    test("should get error getting data", async ()=> {
        try {
            let data = await getData("error");
            // console.log(data);
        }
        catch (error:any) {
            expect(error.length).toBe(0);
        }
    });