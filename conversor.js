const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
   
    const inputCurrencyValue = document.querySelector(".input-currency").value 

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Valor convertido Dolar, Euro, Libra etc

    console.log(currencySelect.value)
    
    const dollarToday = 4.99
    const euroToday = 5.27
    const libraToday = 6.05

    
     if(currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)


     }

     if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

        
     }

     if(currencySelect.value == "libra") {
currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
}).format(inputCurrencyValue / libraToday)


        
     }





    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    



    console.log(convertValue)
}


convertButton.addEventListener("click", convertValues)