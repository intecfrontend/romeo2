import { useState, useEffect } from 'react';

export default function ExampleCounter() {
  // const [today, setToday] = useState(0);




  useEffect(() => {
    var today = new Date().getSeconds();

    var r = document.querySelector(":root");
    const test = deg => {
      r.style.setProperty("--degraden", deg);
    };

    if (today <= 10) {
      test("-90deg");
    } else if (today <= 30) {
      test("-75deg");
    } else if (today <= 40) {
      test("-50deg");
    } else if (today <= 60) {
      test("35deg");
    } else {
      test("-180deg");
    }


    return () => clearInterval(today);
  }, []);








  return (
    <div className="App">
    </div>
  );
}