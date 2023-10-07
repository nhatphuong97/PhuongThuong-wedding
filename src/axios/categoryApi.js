import axiosClient from "./axiosClient";

const categoriesApi = {
  getAll(params) {
    const path = "/products";
    return axiosClient.get(path, { params: params });
  },
  getById(id) {},
  create(data) {},
  update(data) {},
  delete(id) {},
};

export default categoriesApi;
