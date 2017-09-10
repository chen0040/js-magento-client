'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MagentoProductApi = exports.MagentoCategoryApi = exports.MagentoAccountApi = exports.MagentoHttpClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MagentoHttpClient = exports.MagentoHttpClient = function () {
    function MagentoHttpClient() {
        _classCallCheck(this, MagentoHttpClient);
    }

    _createClass(MagentoHttpClient, null, [{
        key: 'getSecure',
        value: function getSecure(url, token) {
            if (token) {
                return (0, _axios2.default)({
                    method: 'get',
                    headers: {
                        "Authorization": "Bearer " + token
                    },
                    url: url
                });
            } else {
                return (0, _axios2.default)({
                    method: 'get',
                    /*headers: {
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                        'Access-Control-Allow-Origin': '*',
                    },*/
                    url: url
                });
            }
        }
    }]);

    return MagentoHttpClient;
}();

var MagentoAccountApi = exports.MagentoAccountApi = function () {
    function MagentoAccountApi() {
        _classCallCheck(this, MagentoAccountApi);
    }

    _createClass(MagentoAccountApi, null, [{
        key: 'loginAsClient',
        value: function loginAsClient(siteUrl, username, password) {

            return (0, _axios2.default)({
                method: 'post',
                url: siteUrl + MagentoAccountApi.Path4LoginAsClient,
                data: {
                    username: username,
                    password: password
                }
            });
        }
    }]);

    return MagentoAccountApi;
}();

MagentoAccountApi.Path4LoginAsClient = "/rest/V1/integration/customer/token";
MagentoAccountApi.Path4LoginAsAdmin = "/rest/V1/integration/admin/token";

var MagentoCategoryApi = exports.MagentoCategoryApi = function () {
    function MagentoCategoryApi() {
        _classCallCheck(this, MagentoCategoryApi);
    }

    _createClass(MagentoCategoryApi, null, [{
        key: 'loadRootCategory',
        value: function loadRootCategory(siteUrl, token) {
            return MagentoHttpClient.getSecure(siteUrl + MagentoCategoryApi.Path4Categories, token);
        }
    }, {
        key: 'loadProducts',
        value: function loadProducts(siteUrl, categoryId, token) {
            return MagentoHttpClient.getSecure(siteUrl + MagentoCategoryApi.Path4Categories + '/' + categoryId + '/products', token);
        }
    }]);

    return MagentoCategoryApi;
}();

MagentoCategoryApi.Path4Categories = "/rest/V1/categories";

var MagentoProductApi = exports.MagentoProductApi = function () {
    function MagentoProductApi() {
        _classCallCheck(this, MagentoProductApi);
    }

    _createClass(MagentoProductApi, null, [{
        key: 'loadProduct',
        value: function loadProduct(siteUrl, sku, token) {
            return MagentoHttpClient.getSecure(siteUrl + MagentoProductApi.Path4Products + '/' + encodeURIComponent(sku), token);
        }
    }, {
        key: 'getThumbnailImageUrl',
        value: function getThumbnailImageUrl(siteUrl, product) {
            var attributes = product.custom_attributes;
            var thumbnail = '';
            for (var i = 0; i < attributes.length; ++i) {
                var attribute = attributes[i];
                if (attribute.attribute_code == 'thumbnail') {
                    thumbnail = attribute.value;
                    break;
                }
            }
            return siteUrl + '/pub/media/catalog/product' + thumbnail;
        }
    }]);

    return MagentoProductApi;
}();

MagentoProductApi.Path4Products = "/rest/V1/products";