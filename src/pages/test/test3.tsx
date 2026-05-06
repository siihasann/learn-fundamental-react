import { useState } from "react";

function TestHome3() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setCount(count + Number(input));
    setInput("");
  };
  return (
    <>
      <h1>Test Home 3</h1>
      <p>Nilai Sekarang: {count}</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Tambah dari input</button>
    </>
  );
}

export default TestHome3;
