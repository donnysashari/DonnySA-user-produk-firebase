import BaseService from './baseService';
import API from '../config/rest';

const getProduct = (ProductName, ProductOffset) => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit: 10,
      offset: ProductOffset,
      search: ProductName,
    },
  });
};

export default { getProduct };
