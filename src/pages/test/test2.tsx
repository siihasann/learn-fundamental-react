import { useState } from "react";

function TestHome2() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <div>
        <h1>Test Home 2</h1>
        <p>Nilai Sekarang: {count}</p>

        <div>
          <button onClick={increment}>Tambah</button>
          <button onClick={decrement}>Kurang</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default TestHome2;
