var firstEle = document.body.querySelector(".first");
var totalEle = document.body.querySelector(".total");

var firstPrompt = Number(prompt("How much was your bill?"));
var taxPrompt = firstPrompt*.07;
var totaltaxPrompt = taxPrompt+firstPrompt;
var tipPrompt = totaltaxPrompt*.05;
var totaltipPrompt = tipPrompt + totaltaxPrompt;


firstEle.innerHTML = "Your original bill was" +" " + "$" + firstPrompt+".";
totalEle.innerHTML = "Your bill after a 7% tax and 5% tip is" + " "+"$" + totaltipPrompt+".";