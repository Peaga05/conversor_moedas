let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";


function cotar(){

    let valor =  document.querySelector("#textArea").value;
    let moeda = document.querySelector("#moeda").value;

    fetch(url).then((res)=>{

        return res.json();
    })
    .then((data) => {
        let valorUsd =  parseFloat(data.USDBRL.bid);
        let valorEuro = parseFloat(data.EURBRL.bid);
        let valorBit =  parseFloat(data.BTCBRL.bid);

        let dolar = valorUsd.toFixed(2);
        let euro = valorEuro.toFixed(2);
        let bit = valorBit.toFixed(2);

        localStorage.setItem("dolar", dolar);
        localStorage.setItem("euro", euro);
        localStorage.setItem("bit", bit);
        
        if(moeda == "USD"){
            let dolarReal = valor * dolar;
            document.querySelector("#resultado").innerHTML = dolarReal.toFixed(2);
        }
        else if(moeda == "EUR"){
            let euroReal = valor * euro;
            document.querySelector("#resultado").innerHTML = euroReal.toFixed(2);
        }
         else if(moeda == "BTC"){
             let bitReal = valor * bit;
            document.querySelector("#resultado").innerHTML = bitReal.toFixed(2);
        }
    })
}

window.onload = initPage;

function initPage(){
    fetch(url).then((res)=>{

        return res.json();
    })
    .then((data) => {
        let valorUsd =  parseFloat(data.USDBRL.bid);
        let valorEuro = parseFloat(data.EURBRL.bid);
        let valorBit =  parseFloat(data.BTCBRL.bid);

        let exDolar = valorUsd.toFixed(2);
        let exEuro = valorEuro.toFixed(2);
        let exBit = valorBit.toFixed(2);

        document.querySelector(".exibir").innerHTML = `<p class="info">Dólar: US$ ${exDolar}</p>`;
        document.querySelector(".exibir").innerHTML += `<p class="info">Euro: € ${exEuro}</p>`;
        document.querySelector(".exibir").innerHTML += `<p class="info">Bitcoin: BTC ${exBit}</p>`;;

        console.log("carregou");
    })
}
    

