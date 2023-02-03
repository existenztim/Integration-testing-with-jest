import { getData } from "../services/movieservice";
import {mockMovies} from "../services/__mocks__/movieservice";
 
jest.mock("axios", () => ({
    get: async (url: string) => {
      	return new Promise((resolve, reject) => {
        	if (url.endsWith("error")) {
            	reject({data:[], status: 500});
        	} else {
				resolve({ data:{Search:mockMovies, status: 200 }}); 
        	}
      	});
	}
}));

/*****************************************************
 *                   getData
 ****************************************************/

describe("tests function getData()", () => {
  
    test("Should success getting data", async () => {
      
    const data = await getData("test");
  
		expect(data.length).toBe(3);
		expect(data[0].Title).toBe("A-Movie");
    });
  
    test("Should get error getting data", async () => {
      
    	const data = await getData("error");
  
      	expect(data.length).toBe(0);
    });
  
});