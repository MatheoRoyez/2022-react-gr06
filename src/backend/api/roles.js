import { axios } from ".";

export const getAllRoles = async () => {
    const { data }  = await axios.get('roles');
    return data;
};

export const updateCustomizable = async(name, customizable) => {
    const { data } = await axios({
        method: 'put',
        url: `/roles/${name}/template/customizable`,
        data: {
            customizable
        }
    });
    return data;
}