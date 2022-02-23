import React from "react";
function flashText() {

}
function changebar() {
  var r = document.querySelector(":root");

  const test = deg => {
    r.style.setProperty("--degraden", deg);
  };
  // check if already an interval has been set up
  var today = new Date().getSeconds();
  console.log("today" + today);

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
  
}

setInterval(changebar, 1000);

function Test() {

  return (
    <div className="containertest">

      <div className="test">test</div>
    </div>
  );
}

export default Test;
