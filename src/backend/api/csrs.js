import { axios } from ".";

export const getCSRByID = async (id) => {
    const { data } = await axios.get(`csrs/${id}`);
    return data;
};