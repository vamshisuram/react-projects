import { useState, memo, useContext } from "react";

const Counter = ({context}) => {
  const [count, setCount] = useState(0)
  const theme = useContext(context)
  const handlePlus = () => setCount(count + 1)
  const handleMinus = () => setCount(count - 1)
  return <div style={{margin: "40px", background: "beige"}}>
      <button onClick={handleMinus}>-</button>
      <span>{count} {theme}</span>
      <button onClick={handlePlus}>+</button>
  </div>
}

export default memo(Counter);