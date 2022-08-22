//Fetch API Example 01
fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin%2Cbinancecoin%2Cripple%2Cbinance-usd%2Ccardano%2Csolana%2Cdogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false"
)
    .then((response) => {
        return response.json();
    })
    .then((coins) => {
        console.log(coins);
        let output = "";
        coins.map((coin) => {
            output += `<span style="margin-right:20px;"><span style="text-transform: uppercase;">${coin.symbol} $${coin.current_price.toFixed(2)}</span> <span style="color:${coin.price_change_percentage_24h > 0 ? '#0eaf22' : '#e13d00'};">${coin.price_change_percentage_24h.toFixed(2)}%</span></span>`;
        });
        document.querySelector(".price_list01").innerHTML = output;
    })
    .catch((error) => {
        console.log(error);
    });

//Fetch API Example 02
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin%2Cbinancecoin%2Cripple%2Cbinance-usd%2Ccardano%2Csolana%2Cdogecoin&vs_currencies=usd&include_24hr_change=true")
    .then((response) => {
        return response.json();
    })
    .then((coins) => {
        console.log(coins);
        let out = "";
        // caching map
        var objMap = new Map(Object.entries(coins));
        // fast iteration on Map object
        objMap.forEach((item, key) => {
            // do something with an item
            console.log(key, item);
            out += `<span style="margin-right:20px;"><span>${key} $${item.usd}</span> <span style="color:#e13d00;">${item.usd_24h_change}%</span></span>`;;
        });
        document.querySelector(".price_list02").innerHTML = out;
    }).catch((error) => {
        console.log(error);
    });
