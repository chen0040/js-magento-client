# js-magento-client

Magento javascript client for node.js using ES6 class

# install 

```bash
npm install js-magento-client
```

# Usage

### Login Api

```javascript
import {MagentoAccountApi} from 'js-magento-client';
import expect from 'expect';

let url = 'magento-url';
let username = 'username';
let password = 'password';

MagentoAccountApi.loginAsClient(
      url, 
      username, 
      password)
      .then((response) => {
        let token = response.data;
        expect(response.status).toEqual(200);
        expect(token.length).toBeGreaterThan(0);
        done();
      }).catch(reason => {
        console.log(reason);
        done(new Error(reason));
      });
```

### Root Category Api

```javascript
import {MagentoCategoryApi} from 'js-magento-client';
import expect from 'expect';

let url = 'magento-url';

MagentoCategoryApi.loadRootCategory(url).then(response => {
   let rootCategory = response.data;
   expect(rootCategory.children_data.length).toBeGreaterThan(0);
   done();
}).catch(reason => {
   console.log(reason);
   done(new Error(reason));
});
```

### Load Products in a particular category

```javascript
import {MagentoCategoryApi} from 'js-magento-client';
import expect from 'expect';

let categoryId = 19;
let url = 'magento-url';

MagentoCategoryApi.loadProducts(url, categoryId).then(response => {
   //console.log(response.data);
   expect(response.data.length).toBeGreaterThan(0);
   done();
}).catch(reason => {
   console.log(reason);
   done(new Error(reason));
})
```

### Load Product by SKU

```javascript
import {MagentoProductApi} from 'js-magento-client';
import expect from 'expect';

let sku = 'product_dynamic_17';
let url = 'magento-url';

MagentoProductApi.loadProduct(url, sku).then(response => {
   let product = response.data;
   console.log(product);
   done();
}).catch(reason => {
   console.log(reason);
   done(new Error(reason));
});
```