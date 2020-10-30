const apiRouter = require('./api/api');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const errorHandler = require ('errorhandler');
const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api',apiRouter());
app.use(errorHandler());
app.listen(PORT, () =>{
    console.log(`Server is listening on Port ${PORT}`);
});


const express = require('express');
const morgan = require('morgan');
const app = express();


const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req,res,next)=>{
const quote = getRandomElement(quotes);
res.send({quote:quote})
});
app.get('/api/quotes', (req,res,next) =>{
if(!req.query.hasOwnProperty(person)) {
  res.send({quote:quote})
}else{
  const filterQuote = quotes.filter(element=>element.person===req.query.person);
  res.send({quote:filterQuote});
}
})

app.listen(PORT, () =>
console.log(`Server is listening on ${PORT}`)
)
module.exports = app