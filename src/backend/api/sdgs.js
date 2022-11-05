import {axios} from ".";

export const getAllSDGSByCategoryId = async (id) => {
    const { data } = await axios.get(`sdgs/category/${id}`);
    return data;
};
