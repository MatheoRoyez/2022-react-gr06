import { axios } from ".";

export const getAllData = async (name) => {
  const { data } = await axios.get(`roles/${name}/template/resources`);
  return data;
};

export const postTemplate = async (template, role) => {
  await axios.put(`roles/${role.name}/template`, {
    template: JSON.stringify(template),
  });
};

export const getRoleTemplate = async (name) => {
  const { data } = await axios.get(`roles/${name}/template`);
  return data;
};

export const deleteRoleTemplate = async (name) => {
  await axios.delete(`roles/${name}/template`);
};
