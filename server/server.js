const express = require('express');
const app = express();
var cors = require('cors');
const router = express.Router();
const port = 3200;

const originWhitelist = ['http://localhost:4200'];

// url: http://localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

// all routes prefixed with /api
app.use('/api', router);

app.use((request, response, next) => {
    console.log('Server info: Request received');
    
    let origin = request.headers.origin;
    
    // only allow requests from origins that we trust
    if (originWhitelist.indexOf(origin) > -1) {
      response.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    // only allow get requests, separate methods by comma e.g. 'GET, POST'
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    
    // push through to the proper route
    next();
  });

app.get('/api/accounts',(req,response,next) => {
    
    response.json([{
        AccountNo: 522399332,
        AccountName:'Home Loan',
        Balance:1368.00,
        CarryOver:1828.00,
        EarlyFee:33.00,
        Interest:295.00
    },{
      AccountNo:651921865,
      AccountName:'Car Loan',
      Balance:1839.00,
      Interest:238.00,
      EarlyFee:421.00,
      CarryOver:1191.00
    },
    {
      AccountNo:90895177,
      AccountName:'Personal Loan',
      Balance:1856.00,
      Interest:295.00,
      EarlyFee:423.00,
      CarryOver:1023.00
    }]);
    
})

app.get('/api/users',(request,response,next) => {
  const users = [
    {"name": "The Godfather", "price": 10, "author": "Mario Puzo"},
    {"name": "The Fellowship of the Ring", "price": 15, "author": "J.R.R. Tolkien"},
    {"name": "Harry Potter and the Deathly Hallows", "price": 20, "author": "J.K. Rowling  "},
    {"name": "book1", "price": 120.12, "author": "Peter Robert"},
    {"name": "book2", "price": 20.44, "author": "Ana Wong"},
    {"name": "book3", "price": 20.68, "author": "Olivia Bingoton"},
    {"name": "book4", "price": 20.45, "author": "Senita Li"},
    {"name": "book5", "price": 120, "author": "Peter Pand"},
    {"name": "book6", "price": 30, "author": "Anaisy Kmart"},
    {"name": "book7", "price": 32, "author": "unmibra kkt"},
    {"name": "book8", "price": 33, "author": "author8  "},
    {"name": "book9", "price": 34, "author": "author9  "},
    {"name": "book10", "price": 35, "author": "author10  "},
    {"name": "book11", "price": 39, "author": "author11  "},
    {"name": "book12", "price": 10, "author": "author12  "},
    {"name": "book13", "price": 12, "author": "author13  "},
    {"name": "book14", "price": 14, "author": "author14  "},
    {"name": "book15", "price": 15, "author": "author15  "},
    {"name": "book16", "price": 16, "author": "author16  "},
    {"name": "book17", "price": 17, "author": "author17  "},
    {"name": "book18", "price": 18, "author": "author18  "},
    {"name": "book19", "price": 19, "author": "author19  "},
    {"name": "book20", "price": 21, "author": "author20  "},
    {"name": "book1", "price": 22, "author": "author1  "},
    {"name": "book2", "price": 23, "author": "author2  "},
    {"name": "book3", "price": 24, "author": "author3  "},
    {"name": "book4", "price": 26, "author": "author4  "},
    {"name": "book5", "price": 27, "author": "author5  "},
    {"name": "book6", "price": 28, "author": "author6  "},
    {"name": "book7", "price": 29.55, "author": "author7  "},
    {"name": "book8", "price": 210, "author": "author8  "},
    {"name": "book9", "price": 220, "author": "author9  "},
    {"name": "book10", "price": 230, "author": "author10  "},
    {"name": "book11", "price": 240, "author": "author11  "},
    {"name": "book12", "price": 250, "author": "author12  "},
    {"name": "book13", "price": 260, "author": "author13  "},
    {"name": "book14", "price": 270, "author": "author14  "},
    {"name": "book15", "price": 280, "author": "author15  "},
    {"name": "book16", "price": 290, "author": "author16  "},
    {"name": "book17", "price": 230, "author": "author17  "},
    {"name": "book18", "price": 220, "author": "author18  "},
    {"name": "book19", "price": 320, "author": "author19  "},
    {"name": "book20", "price": 420, "author": "author20  "},
    {"name": "book21", "price": 520, "author": "author1  "},
    {"name": "book22", "price": 620, "author": "author2  "},
    {"name": "book23", "price": 720, "author": "author3  "},
    {"name": "book24", "price": 820, "author": "author4  "},
    {"name": "book25", "price": 920, "author": "author5  "},
    {"name": "book26", "price": 1020, "author": "author6  "},
    {"name": "book27", "price": 1120, "author": "author7  "},
    {"name": "book28", "price": 1220, "author": "author8  "},
    {"name": "book29", "price": 1320, "author": "author9  "},
    {"name": "book310", "price": 15.28, "author": "author10  "},
    {"name": "book311", "price": 10.05, "author": "author11  "},
    {"name": "book312", "price": 80.24, "author": "author12  "},
    {"name": "book313", "price": 60.45, "author": "author13  "},
    {"name": "book314", "price": 12.55, "author": "author14  "},
    {"name": "book315", "price": 18.65, "author": "author15  "},
    {"name": "book316", "price": 25.58, "author": "author16  "},
    {"name": "book317", "price": 12.56, "author": "author17  "},
    {"name": "book318", "price": 18.55, "author": "author18  "},
    {"name": "book319", "price": 620, "author": "author19  "},
    {"name": "book320", "price": 820.45, "author": "author20  "}
];
  response.json(users);
  next();
});

// using router.get() to prefix our path
// url: http://localhost:3000/api/
// router.get('/accounts', (request, response) => {
//   response.json(
//         {
//           AccountNo: 12084060,
//           AccountName:'Desmond Tam',
//           Balance:16.42,
//           CarryOver:true,
//           EarlyFee:100.00,
//           Interest:12.50
//         }
//     );
// });

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));