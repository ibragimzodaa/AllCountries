import { get } from "./dom.js";
// import axios from 'axios'; 
 
export let api = "https://restcountries.com/v3.1/all";

export async function getUsers() {
    try {
        const { data } = await axios.get(api);
        get(data);
        
    } catch (error) {
        console.error(error);
    }
}

// Search
