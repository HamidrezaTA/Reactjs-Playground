import { useState } from "react";

function Counter() {
  const [counterNumber, setCounterNumber] = useState<number>(0);
  const [numberColor, setNumberColor] = useState<string>("red");

  let colors: string[] = ["red", "green", "pink", "blue"];

  const styles = {
    card: {
      width: "20rem",
    },
    number: {
      fontSize: "xxx-large",
      color: numberColor,
    },
  };

  const increase = () => {
    setCounterNumber((prevNumber) => prevNumber + 1);
    let rnd = Math.floor(Math.random() * colors.length);
    setNumberColor(() => colors[rnd]);
  };

  const decrease = () => {
    setCounterNumber((prevNumber) => prevNumber - 1);
    let rnd = Math.floor(Math.random() * colors.length);
    setNumberColor(() => colors[rnd]);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div
        className="card mt-5 border border-3 border-dark text-center"
        style={styles.card}
      >
        <div className="card-body">
          <h1>Funny Counter</h1>
          <button
            className="btn btn-success btn-lg m-5 fs-5 fw-bolder"
            onClick={increase}
          >
            +
          </button>
          <button
            className="btn btn-danger btn-lg m-5 fs-5  fw-bolder"
            onClick={decrease}
          >
            -
          </button>
          <label className="fw-bolder" style={styles.number}>
            {counterNumber}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Counter;
