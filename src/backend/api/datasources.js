import { axios } from ".";

export const getDatasourceByID = async (id) => {
    const { data } = await axios.get(`datasources/${id}`);
    return data;
};