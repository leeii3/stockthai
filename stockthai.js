var cheerio = require('cheerio')
var request = require('request');
//base service
const BASE_SERVICE = 'http://www.settrade.com/C04_01_stock_quote_p1.jsp?txtSymbol=';


var stockthai = {
    get: function (options, callback) {

        if (!Array.isArray(options.stock_quotes)) {
            options.stock_quotes = [options.stock_quotes];
        }
        options.stock_quotes.forEach(function (item) {

            var cookie = request.cookie('IPO_Language=English');
            var request_options = {
                url: BASE_SERVICE + item,
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0',
                    'Cookie': cookie,
                    'Accept': '/',
                    'Connection': 'keep-alive'
                }
            };


            request(request_options, function (error, response, body) {


                if (!error && response.statusCode == 200) {

                    //parser from html
                    $ = cheerio.load(body);
                    var d = $(".txt13").find('.fr');

                    var stockObj = {
                        name: $(".title-index").html(),
                        price: $(".txt48").html(),
                        company: $(".txt19").html(),
                        prior: $(d[0]).html(),
                        open: $(d[2]).html(),
                        valume: $(d[1]).html(),
                        value: $(d[3]).html(),
                        pervalue: $(d[5]).html(),
                        height: $(d[4]).html(),
                        low: $(d[6]).html(),
                        average_price: $(d[8]).html(),
                        ceiling: $(d[7]).html(),
                        floor: $(d[9]).html()
                    }

                    //debug stock object;
                    //console.log(stockObj);

                    callback(item, stockObj);

                }
            });

        });//end option.stock_quotes loop
    }


}
module.exports = stockthai;
