# test-leaseco-plain-js

### Setup your environment
The following fields should be customized in index.html:
1. `LEASECO-CHECKOUT-ENDPOINT` : This will run leaseco modal and will connect to the specific api your option are: 
    * `https://localhost:3002/leaseco.js` for local env
    * `https://dev-checkout.leaseco.io/leaseco.js` for Development
    * `https://checkout.leaseco.io/leaseco.js` for Production 
1. `YOUR-MERCHANT-ID`: the unique merchant id (connect with us to get one)

## Running the app
1. `node server.js`
3. App should be running on `localhost:8000`