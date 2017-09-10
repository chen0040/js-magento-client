import {MagentoProductApi} from '../build/MagentoApi';
import MagentoAccountInfo from './MagentoAccountInfo';

describe('Magento Category Api', () => {
   it('can load the product with sku being product_dynamic_17 of the magento site', (done) => {
       let sku = 'product_dynamic_17';
       MagentoProductApi.loadProduct(MagentoAccountInfo.url, sku).then(response => {
           let product = response.data;
           console.log(product);
           done();
       }).catch(reason => {
           console.log(reason);
           done(new Error(reason));
       })
   }); 
});