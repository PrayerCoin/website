function renderMessage(msg){
    alert(msg);
}

var tipButton = document.querySelector('.metamask')
var ethVal = document.getElementById("metamaskval");
tipButton.addEventListener('click', function() {
  if (typeof web3 === 'undefined') {
    return renderMessage('You need to install MetaMask to use this feature.  https://metamask.io')
  }

  var user_address = web3.eth.accounts[0]
  web3.eth.sendTransaction({
    to: '0x43ad0e9446e72c5b9677a108f2b1d4adf34452cd',
    from: user_address,
    value: web3.toWei(parseFloat(ethVal.value), 'ether'),
  }, function (err, transactionHash) {
    if (err) return renderMessage('Oh no!: ' + err.message)

    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Your ETH was recieved!')
  })
})
