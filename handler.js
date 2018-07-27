// serverless node template

// 'use strict';

// module.exports.hello = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   callback(null, response);

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
// };

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.hello = (event, context, callback) => {  
  return stripe.products.list({
    limit: 10
  })
  .then((products) => {    
    const response = {      
      statusCode: 200,      
      headers: {        
        'Access-Control-Allow-Origin': '*',      
      },      
      body: JSON.stringify({        
        data: products.data
      })
    };    
    callback(null, response);  
  })
};
