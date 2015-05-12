# stockthai
Client api for stock exchang of thailand


###installing 
      npm install stockthai

###how to use

      var stockthai = require("stockthai");
      
      var options = {stock_quotes: 'mint' };
      stockthai.get(options,function(quote,result){
      
        console.log( "Current Price of  "+quote+" is ---->"+result.price);
        
        //see other fields  
        console.log(JSON.stringify(result));
      
      });
      
      
### return object example
    {"name":"MINT","price":"31.75","company":"MINOR INTERNATIONAL PUBLIC COMPANY LIMITED ","prior":"31.00","open":"31.00","valume":"4,914,162","value":"154,433.18","pervalue":"1.00","height":"31.75","low":"31.00","ave  rage_price":"31.40","ceiling":"40.25","floor":"21.70"}

