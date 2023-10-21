import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39213974-396d72fb1f832236dc1554890';

export const getImage = async (query, page) => {
    const response = await axios.get(
        `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
};


// export const getImage = async (query, page) => {
//     const params = new URLSearchParams({
//       q: query,
//       image_type: "photo",
//       orientation: "horizontal",
//       safesearch: true,
//       page,
//       per_page: 12,
//     });
//     const key = `?key=${API_KEY}`;
  
//     const images = await axios.get(key, { params });
//     return images.data;
//   }