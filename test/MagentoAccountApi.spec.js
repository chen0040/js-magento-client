import {MagentoAccountApi} from '../build/MagentoApi';
import MagentoAccountInfo from './MagentoAccountInfo';
import expect from 'expect';

const defaultUrl = 'http://j-clef-web-01.japaneast.cloudapp.azure.com';
const username = ''

describe('Magento Account Api', () => {
  it('should return a valid token if given a valid client username and password', function(done) {
      MagentoAccountApi.loginAsClient(
          MagentoAccountInfo.url, 
          MagentoAccountInfo.username, 
          MagentoAccountInfo.password)
          .then((response) => {
            let token = response.data;
            expect(response.status).toEqual(200);
            expect(token.length).toBeGreaterThan(0);
            done();
          }).catch(reason => {
            console.log(reason);
            done(new Error(reason));
          });
    
  });
});

