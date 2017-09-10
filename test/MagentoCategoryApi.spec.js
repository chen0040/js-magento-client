import {MagentoCategoryApi} from '../build/MagentoApi';
import MagentoAccountInfo from './MagentoAccountInfo';
import expect from 'expect';

describe('Magento Category Api', () => {
   it('can load the root category of the magento site', (done) => {
       MagentoCategoryApi.loadRootCategory(MagentoAccountInfo.url).then(response => {
           let rootCategory = response.data;
           expect(rootCategory.children_data.length).toBeGreaterThan(0);
           done();
       }).catch(reason => {
           console.log(reason);
           done(new Error(reason));
       })
   }); 
    
   it('can load the products in category 19', (done) => {
       let categoryId = 19;
       MagentoCategoryApi.loadProducts(MagentoAccountInfo.url, categoryId).then(response => {
           //console.log(response.data);
           expect(response.data.length).toBeGreaterThan(0);
           done();
       }).catch(reason => {
           console.log(reason);
           done(new Error(reason));
       })
   }); 
});