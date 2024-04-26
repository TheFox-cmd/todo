import { useState } from "react";
import Item from "./item.js";

function App() {
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(1);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const add = () => {
    let defaultValues = {
      Title: title === "" ? "Unititled-" + count : title,
      Desc: desc === "" ? "" : desc,
    };

    setArr([
      ...arr,
      {
        ...defaultValues,
        Date: new Date().getDate(),
      },
    ]);

    setCount(count + 1);
    setTitle("");
    setDesc("");
  };

  const clearAll = () => {
    setArr([]);
    setCount(1);
  };
  {
    // TODO: return on focus item
  }
  return (
    <div className="App">
      <button className="add" onClick={add}>
        <span>Add</span>
        <i></i>
      </button>
      <button className="clear" onClick={clearAll}>
        <span>Clear</span>
        <i />
      </button>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>

      {
        /* when return in JSX, to execute JS instruction, use {} */
        /* map in JS always needs return (not necessary return keyword)*/
        arr.map((e, i) => {
          return (
            <Item
              key={i}
              Title={e.Title}
              Desc={e.Desc}
              Date={e.Date}
              index={i}
              fn={setArr}
            />
          );
        })
      }
    </div>
  );
}

export default App;
