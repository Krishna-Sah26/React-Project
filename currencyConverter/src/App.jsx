import { useState } from 'react'
import { InputBox } from './components'

import { useCurrencyInfo } from "./hooks/usecurrencyInfo";



function App() {
  
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);
  const { currencyInfo } = useCurrencyInfo(fromCurrency);                         
    const options = currencyInfo ? Object.keys(currencyInfo) : [];

    const swap = () => {
     setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      setAmount(convertAmount);
      setConvertAmount(amount);                       
    }

    const convert = () => {
      setConvertAmount(amount * currencyInfo[toCurrency])
    }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/7584353/pexels-photo-7584353.jpeg')",
      }}
    >

      <div className="w-full">

        <div
          className="w-full max-w-md mx-auto 
          border border-gray-600 
          rounded-lg p-5 
          backdrop-blur-sm 
          bg-white/30"
        >

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >

            {/* From */}
            <div className="w-full mb-1">
              <InputBox 
              label="From"
              amount={amount}
              currencyoptions={options}
              onCurrencyChange={(currency) => setFromCurrency(currency)}
              onAmountChange={(amount) => setAmount(amount)}
               />
            </div>

            {/* Swap */}
            <div className="relative w-full h-0.5">

              <button
                type="button"
                className="
                absolute left-1/2
                -translate-x-1/2
                -translate-y-1/2
                border-2
                border-white
                rounded-md
                bg-blue-600
                text-white
                px-2
                py-0.5
                "
                onClick={swap}
              >
                swap
              </button>

            </div>


            {/* To */}
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To" 
              amount={convertAmount}
              currencyoptions={options}
              onCurrencyChange={(currency) => setToCurrency(currency)}
              onAmountChange={(amount) => setConvertAmount(amount)}
              />
            </div>


            {/* Convert Button */}
            <button
              type="submit"
              className="
              w-full
              bg-blue-600
              text-white
              px-4
              py-3
              rounded-lg
              "
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>

          </form>

        </div>

      </div>

    </div>
  );

}

export default App
