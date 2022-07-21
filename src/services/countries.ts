import axios from 'axios';

const url: string = 'https://restcountries.com/v3.1';

const getAllCountries = async () => {
  try {
    const response = await axios.get(`${url}/all`);

    return response.data;
  } catch (error) {
    throw new Error(`Failed to load. Code: ${error?.response?.status}`);
  }
};

export default {
  getAllCountries,
};
