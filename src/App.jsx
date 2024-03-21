import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });

  function handleChange(inputIdentifier, newValue){
      setUserInput((prevInput) => {
          return {
              ...prevInput,
              [inputIdentifier]: Number(newValue),
          };
      })
  }
  return (
    <>
      <Header userInput={userInput} onChange={handleChange}/>
      <UserInput />
      <Results input={userInput}/>
    </>
  )
}

export default App
