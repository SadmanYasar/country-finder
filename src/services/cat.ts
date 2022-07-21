import axios from 'axios';

const baseUrl: string = 'https://cat-fact.herokuapp.com/facts';

const getCatFact = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/random?animal_type=cat&amount=1`
    );
    return response.data.text;
  } catch (error) {
    throw new Error('Error loading cat fact');
  }
};

export default {
  getCatFact,
};
