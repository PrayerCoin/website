
(function init(){
    var ethRaised = document.querySelector('.eth-raised h2')
    var usdRaised = document.querySelector('.usd-raised h2')
    var tokensIssued = document.querySelector('.pray-issued h2')

    var bar = document.getElementById("bar");

    const apiKey = 'TKQTU42TCH6DB96TZ5ARNYRW5346BMV6ZG';
    const tokenAddr = '0x43ad0e9446e72c5b9677a108f2b1d4adf34452cd';
    const godAddr = '0x798b0a600cd5698eb5d3e853444a384fa36fe12e';

    $.getJSON('https://api.etherscan.io/api?module=account&action=balance&address=' + godAddr + '&tag=latest&apikey=' + apiKey, function (data) {
        data.result = parseFloat(data.result) / 1000000000000000000;
        data.result = (data.result + 1.3093).toFixed(2);
        ethRaised.innerHTML = numWCommas(data.result);
        usdRaised.innerHTML = '$' + numWCommas(data.result * 900);
    })

    $.getJSON('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=' + tokenAddr + '&address=0x798b0a600cd5698eb5d3e853444a384fa36fe12e&tag=latest&apikey=' + apiKey,
        function (data) {
            data.result = 666666666 - (parseFloat(data.result) / 1000000000000000000) + 14496.46;
            tokensIssued.innerHTML = numWCommas(data.result.toFixed(2));
            console.log(data.result, data.result / 6666);
            bar.innerHTML = (data.result / 666666).toFixed(1) + '%';
            setTimeout(function(){bar.style.width = (data.result / 666666) + '%';}.bind(data), 500)
        }
    );

    
})();

function numWCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
