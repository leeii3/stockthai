var stockthai = require("./stockthai");

var options = {stock_quotes: 'mint' };
// or  array list;
//var options = { stock_quotes: ['mint','cpn','cpall']};
stockthai.get(options,function(quote,result){

  console.log( "Current Price of  "+quote+" is ---->"+result.price);
   //see other fields  
  console.log(JSON.stringify(result));


});