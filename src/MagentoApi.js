import axios from 'axios';

export class MagentoHttpClient {
    static getSecure(url, token) {
        if(token) {
            return axios({
                method: 'get',
                headers: {
                    "Authorization": "Bearer " + token
                },
                url: url
            });
        } else {
            return axios({
                method: 'get',
                /*headers: {
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Origin': '*',
                },*/
                url: url
            });
        }
    }
}

export class MagentoAccountApi {

  static loginAsClient(siteUrl, username, password) {
      
    return axios({
        method: 'post',
        url: siteUrl + MagentoAccountApi.Path4LoginAsClient, 
        data: {
            username: username,
            password: password
        }
    });
  }
}

MagentoAccountApi.Path4LoginAsClient = "/rest/V1/integration/customer/token";
MagentoAccountApi.Path4LoginAsAdmin = "/rest/V1/integration/admin/token";

export class MagentoCategoryApi {
    static loadRootCategory(siteUrl, token){
        return MagentoHttpClient.getSecure(siteUrl + MagentoCategoryApi.Path4Categories, token);
    }
    static loadProducts(siteUrl, categoryId, token){
        return MagentoHttpClient.getSecure(siteUrl + MagentoCategoryApi.Path4Categories + '/' + categoryId + '/products', token);
    }
}

MagentoCategoryApi.Path4Categories = "/rest/V1/categories";

export class MagentoProductApi {
     static loadProduct(siteUrl, sku, token){
        return MagentoHttpClient.getSecure(siteUrl + MagentoProductApi.Path4Products + '/' + encodeURIComponent(sku), token);
    }
    static getThumbnailImageUrl(siteUrl, product) {
        let attributes = product.custom_attributes;
        let thumbnail = '';
        for(var i=0; i < attributes.length; ++i) {
            let attribute = attributes[i];
            if(attribute.attribute_code == 'thumbnail') {
                thumbnail = attribute.value;
                break;
            }
        }
        return siteUrl + '/pub/media/catalog/product' + thumbnail; 
    }
}

MagentoProductApi.Path4Products = "/rest/V1/products"; 


