import { useEffect, useState } from "react";
import Item from "./item.js";

function App() {
  // TODO: striked item preservation
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(1);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const add = () => {
    let defaultValues = {
      Title: title === "" ? "Unititled-" + count : title,
      Desc: desc === "" ? "" : desc,
    };

    let tmp = [
      ...arr,
      {
        ...defaultValues,
        Date: new Date().getDate(),
      },
    ];
    localStorage.setItem("key", JSON.stringify(tmp));
    setArr(tmp);

    setCount(count + 1);
    setTitle("");
    setDesc("");
  };

  const clearAll = () => {
    localStorage.setItem("key", JSON.stringify([]));
    setArr([]);
    setCount(1);
  };

  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("key")));
  }, []);

  return (
    <div className="App">
      <button className="add" onClick={add}>
        <span>Add</span>
      </button>
      <button className="clear" onClick={clearAll}>
        <span>Clear</span>
      </button>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            add();
          }
        }}
      ></input>
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            add();
          }
        }}
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
