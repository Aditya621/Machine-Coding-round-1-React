import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [restro, setRestro] = useState<any>([]);

  const handleInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClickEvent = () => {
    setRestro((prev: any) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          name: inputValue,
        },
      ];
    });
    setInputValue("");
  };

  const resetHandler = () => {
    setRestro((prev: any) => (prev = []));
  };

  return (
    <div className="App">
      <div>
        {/* <label>Add Value</label> */}
        <input type="text" value={inputValue} onChange={handleInputValue} />
        <button onClick={handleClickEvent}>Add Restro</button>
        <button onClick={resetHandler}>Reset Table</button>
      </div>

      <div>
        {restro.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {restro.map((data: any) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>nothing added </p>
        )}
      </div>
    </div>
  );
}
