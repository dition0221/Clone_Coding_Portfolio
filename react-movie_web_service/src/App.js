import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);

  function byeFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("hi");
    return byeFn();
  }
  useEffect(hiFn, []);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick} text={"Continue"}>click me</button>
    </div>
  );
}

export default App;