import axios from 'axios';
const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://superheroapi.com/api/10219082321945841/';
export const fetchData = async () => {
  try {
    const data = await axios.get(cors + url + 15);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllData = async (search) => {
  try {
    const data = await axios.get(`${cors}${url}search/${search}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
