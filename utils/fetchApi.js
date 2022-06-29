import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
    
        headers: {
            'X-RapidAPI-Key': 'f9c0ff680cmsh4938da45c7fe764p1d2183jsnff315a09f67f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}