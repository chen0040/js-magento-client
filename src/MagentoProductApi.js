import MagentoHttpClient from './MagentoHttpClient';

class MagentoProductApi {
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

export default MagentoProductApi;