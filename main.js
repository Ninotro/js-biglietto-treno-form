// definisco le funzioni
let distanza,userEta,bigliettoPrezzo,discountOver,discountYoung,priceOver,priceYoung,nomeCognome;
const prezzoPerKilometro= 0.21;

// definisco la funzione per selezionare il valore on click








function myFunction() {
    // Definisco la distanza
    distanza = document.getElementById("form1").value
    console.log(distanza)
    // definisco l'età
    userEta = document.getElementById("form2").value
    console.log(userEta)
    // definisco il nome
    nomeCognome = document.getElementById("form3").value
    console.log(nomeCognome)
    
    // calcolo prezzo normale
    bigliettoPrezzo = distanza * prezzoPerKilometro;
    bigliettoPrezzo = distanza * prezzoPerKilometro;

// calcolo sconto over65
discountOver = (bigliettoPrezzo / 100) * 40;

// calcolo sconto minorenni
discountYoung = (bigliettoPrezzo / 100) * 20;

// costo per over65
priceOver = (bigliettoPrezzo - discountOver);

// costo per minorenni65
priceYoung = (bigliettoPrezzo - discountYoung);

document.getElementById("result").style.display = "block";

document.getElementById("passeggero").innerHTML = nomeCognome;

document.getElementById("random-number").innerHTML = Math.floor(Math.random()*10);

document.getElementById("random-number2").innerHTML = Math.floor(Math.random()*100000);



// condizione over65
if (userEta > 65) { 
    document.getElementById("prezzo").innerHTML = priceOver.toFixed(2)  +"€";
       
}
// condizione minorenne
else if (userEta < 18) {
    document.getElementById("prezzo").innerHTML = priceYoung.toFixed(2)  +"€";

}
else {
    document.getElementById("prezzo").innerHTML = bigliettoPrezzo.toFixed(2)  +"€";
  }

}

