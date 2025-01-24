// import { useState } from 'react';
// import './App.css'

import { useState } from "react";

function App() {
  const [country, setCountry] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  return (
    <div>
      <h1>파리 올림픽</h1>
      <form>
        <label>
          국가명
          <input type="text" placeholder="국가 입력" />
        </label>

        <label>
          금메달
          <input
            type="number"
            value={gold}
            onChange={(e) => {
              setGold(e.target.value);
            }}
          />
        </label>

        <label>
          은메달
          <input
            type="number"
            value={silver}
            onChange={(e) => {
              setSilver(e.target.value);
            }}
          />
        </label>

        <label>
          동메달
          <input
            type="number"
            value={bronze}
            onChange={(e) => {
              setBronze(e.target.value);
            }}
          />
        </label>

        <button type="button">국가 추가</button>
        <button type="button">업데이트</button>
      </form>

      <testComponent>
        <div>테스트 올림픽</div>
      </testComponent>
    </div>
  );
}

function testComponent({ children }) {
  return (
    <div>
      <div color="red">{children}</div>
    </div>
  );
}

export default App;
