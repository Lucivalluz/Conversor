const convertButton = document.querySelector(".convert-button")

function convertValues(){
   
    const inputCurrencyValue = document.querySelector(".input-currency").value 

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Valor convertido Dolar, Euro, Libra etc



    const dollarToday = 4.99

    const convertValue = inputCurrencyValue / dollarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertValue)



    console.log(convertValue)
}


convertButton.addEventListener("click", convertValues)