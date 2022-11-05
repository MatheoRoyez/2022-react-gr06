import {axios} from ".";


export const getAllCategories = async () => {
    const { data } = await axios.get('categories');
    return data;
};

export const getCSRGoalsByCategoryId = async (id) => {
    const { data } = await axios.get(`categories/${id}/csrs`);
    return data;
};
