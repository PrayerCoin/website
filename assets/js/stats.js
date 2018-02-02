
(function init(){
    var ethRaised = document.querySelector('.eth-raised h2')
    var usdRaised = document.querySelector('.usd-raised h2')
    var tokensIssued = document.querySelector('.pray-issued h2')

    var bar = document.getElementById("bar");

    const apiKey = 'TKQTU42TCH6DB96TZ5ARNYRW5346BMV6ZG';

    $.getJSON('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&address=0xe04f27eb70e025b78871a2ad7eabe85e61212761&tag=latest&apikey=' + apiKey,
        function (data) {
            data.result = parseFloat(data.result).toFixed(2);
            ethRaised.innerHTML = numWCommas(data.result);
            usdRaised.innerHTML = '$' + numWCommas(data.result * 700);
            tokensIssued.innerHTML = numWCommas(data.result * 1000);
            console.log(data.result, data.result / 6666);
            bar.style.width = (data.result / 6666) + '%';
        }
    );

    
})();

function numWCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
