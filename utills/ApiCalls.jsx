import axios from "axios";

let apiUrl = "https://api.spoonacular.com/recipes/random?apiKey=fc505b2eb4184b8b84144814e199dca1&number=99&cuisine="

export const axiosGet = async (url) => {
    var config = {
      method: "get",
      url: apiUrl + url,
    };
  
    const result = await axios(config);
    return result.data;
  };