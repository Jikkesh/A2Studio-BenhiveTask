import * as api from "../Api.js";
import { getProduct } from "../Api.js";

export const getProducts = async () => {
  try {
    const response = await api.getAllProducts();
    if (response.status === 200) {
      if (response.data) {
        return response.data;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (productId) => {
  try {
    const product = await getProduct(productId);
    if (product) {
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};