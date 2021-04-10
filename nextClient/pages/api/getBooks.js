import axios from "axios";

export const getBooks = async (title) => {
    let results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
    return results.data.items;
}