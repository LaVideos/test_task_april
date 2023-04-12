import axios from 'axios';
import {API_KEY} from "../constants/api-key";
import {BASE_URL} from "../constants/base-url";

export const newsService = {
    getNews: async (page = 1) => {
            return await  axios
                .get(`${BASE_URL}${page}`, {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                    },
                })
    },
};
