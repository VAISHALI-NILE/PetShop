import { domain } from "./domain";

const apiAuth = {
  login: `${domain}/user/login`,
  SignUp: `${domain}/user/sign-up`,
  getUser: `${domain}/user`,

  getProducts: `${domain}/product/get`,
  getProduct: `${domain}/product`,
  addToCart: `${domain}/cart/add`,
  getCart: `${domain}/cart`,
  updateCart: `${domain}/cart/update/:userId/:productId`,
  createOrder: `${domain}/order/create`,

  getOrders: `${domain}/order/orders`,
};

export { apiAuth };
