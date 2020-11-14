import React, { useState } from "react";
import './App.css';


function App() {

  const [matrixSize, setMatrixSize] = useState(5);
  let line = Array(matrixSize).fill(0);
  let column = Array(matrixSize).fill(0);

  function handleOnChange(value) {
    let integerValue = parseInt(value, 10);
    if (isNaN(integerValue)) {
      integerValue = 0;
    }
    return setMatrixSize(integerValue)
  }

  return (
    <div className="App">
      <form>
        <label>
          Matrix Size:
                <input
            type="text"
            value={matrixSize}
            onChange={e => handleOnChange(e.target.value)}
          />
        </label>
      </form>
      {matrixSize > 0 && matrixSize < 100 ?
        <>
          <table>
            <tbody>
              {line.map((lineValue, lineKey) => {
                return (
                  <tr key={`${lineKey}, ${lineValue}`}>
                    {column.map((columnValue, columnKey) => {
                      return (
                        <td key={`<${lineKey}, ${columnKey}>`}>{
                          (lineKey === columnKey || ((lineKey + columnKey) === (matrixSize - 1)))
                            ? 'X'
                            : `.`
                        }</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
        : 'The matrix should be from 1 to 99 in size.'}
    </div>
  );
}

export default App;
