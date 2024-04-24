import { useState } from "react";
import Item from "./item.js";

function App() {
  const [arr, setArr] = useState([])

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")


  const add = () => {
    setArr([...arr, {
      Title: title,
      Desc: desc,
      Date: new Date().getDate()
    }])
  }

  const clearAll = () => {
    setArr([])
  }

  return (
    <div className="App">
      <button style={{color:"#0FF0FC"}} className="add" onClick={add}><span>Add</span><i></i></button>  
      <button className="del" onClick={clearAll}><span>Delete</span><i/></button>

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
            fn={setArr}
          />
        })
      }

    </div>
  );
}

export default App;
