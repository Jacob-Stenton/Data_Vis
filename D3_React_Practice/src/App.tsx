import { useEffect, useState } from "react";
import "./App.css";
import Bars from "./components/Bars";

function App() {
  const dimesions = {
    height: window.innerHeight * 0.4,
    width: window.innerWidth * 0.8,
  };

  const [data, setData] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 15);
    if (data.length < 200) {
      data.push(Math.random());
    } else {
      const newData = data.splice(1, 200);
      setData(newData);
    }
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="bars-container">
      <Bars data={data} dimesions={dimesions} />
    </div>
  );
}

export default App;
