// react-for-beginners #7.2 Code Challenge
// API : "https://api.coinpaprika.com/v1/tickers"
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json)
      setLoading(false);
    });
  }, []);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usdToCoinPrice, setUsdToCoinPrice] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    setUsdToCoinPrice(coins.map((coin) => [(event.target[0].value / coin.quotes.USD.price), coin.symbol, coin.id, coin.name]));
  }

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <select>
        {coins.map((coin) => (
          <option key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>
        ))}
      </select>}
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write... USD"/>
      </form>
      <ul>
        {usdToCoinPrice.map((coin) => <li key={coin[2]}>{`${coin[3]} : ${coin[0]} ${coin[1]}`}</li>)}
      </ul>
    </div>
  );
}

export default App;