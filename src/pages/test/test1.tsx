import { useState } from "react";

function HomeTest() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Learn count number</h1>
      <div>
        <p>Nilai Sekarang: {count}</p>
      </div>

      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default HomeTest;
