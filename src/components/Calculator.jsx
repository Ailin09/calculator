import React, {useState} from 'react'
import styles from "../css/calculator.module.css"

const Calculator = () => {
  const [result, setResult] = useState("")
  const handleClick= (e)=>{
setResult(result.concat(e.target.name));
  }
const handleClear=()=>{
setResult("");
}
const handleBackspace=()=>{
setResult(result.slice(0, -1));
}
const handleCalculate= ()=>{
  try{
    // eslint-disable-next-line 
    setResult(eval(result.toString()));
  }catch(err){
    setResult("Error")
  }
}
  return (
  

 
    <div className={styles.calculator}>
     <form>
     <input type="text" value={result}/>
     </form>
     <div className={styles.keypad}>
<button onClick={handleClear} className={styles.clear} id="clear">Clear</button>
<button onClick={handleBackspace}className={styles.backspace} id="backspace">C</button>
<button name="/" onClick={handleClick} className={styles.symbol}>&divide;</button>
<button name="7" onClick={handleClick}>7</button>
<button name="8" onClick={handleClick}>8</button>
<button name="9" onClick={handleClick}>9</button>
<button name="*" onClick={handleClick} className={styles.symbol}>&times;</button>
<button name="4" onClick={handleClick}>4</button>
<button name="5" onClick={handleClick}>5</button>
<button name="6" onClick={handleClick}>6</button>
<button name="-" onClick={handleClick} className={styles.symbol}>&ndash;</button>
<button name="1" onClick={handleClick}>1</button>
<button name="2" onClick={handleClick}>2</button>
<button name="3" onClick={handleClick}>3</button>
<button name="+" onClick={handleClick} className={styles.symbol}>+</button>
<button name="0" onClick={handleClick}>0</button>
<button name="." onClick={handleClick}>•</button>
<button onClick={handleCalculate} className={styles.result} id="result">=</button>
     </div>
    </div>
 
  )
}

export default Calculator