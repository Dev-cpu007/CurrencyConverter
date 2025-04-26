import { useState } from 'react'
import './App.css'
import UseCurrencyInfo from "./hooks/UseCurrencyInfo.js"
import InputBox from './components/InputBox.jsx'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const[to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = UseCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <>
    
    </>
  )
}

export default App
