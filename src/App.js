import { useState } from "react";
import Item from "./item.js";

function App() {
  const [arr, setArr] = useState([])

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")


  const addOnClick = () => {
    setArr([...arr, {
      Title: title,
      Desc: desc,
      Date: new Date().getDate()
    }])
  }

  const delOnClick = () => {
    setArr([])
  }

  const rmTodoAtIndex = (i) => {
    let tmp = [...arr]
    tmp.splice(i, 1)
    setArr(tmp)
  }

  return (
    <div className="App">
      <button className="add" onClick={addOnClick}>
        Add
      </button>

      <button className="del" onClick={delOnClick}>
        Delete
      </button>

      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}></input>



      {
        /* when return in JSX, to execute JS instruction, use {} */
        /* map in JS always needs return (not necessary return keyword)*/
        arr.map((e, i) => {
          return <Item
            Title={e.Title}
            Desc={e.Desc}
            Date={e.Date}
            index={i}
            fn={rmTodoAtIndex}
          />
        })
      }

    </div>
  );
}

export default App;
