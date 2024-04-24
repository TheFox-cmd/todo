import { useState } from "react"

function Item({ Title, Desc, Date, index, fn }) {
  const [newTitle, setNewTitle] = useState("")
  const [newDesc, setNewDesc] = useState("")
  const [isEditing, setEditing] = useState(false)

  const remove = () => {
    fn((oldArr) => {
      let tmp = [...oldArr]
      tmp.splice(index, 1)
      return tmp
    })
  }

  const edit = () => {
    fn((oldArr) => {
      let tmp = [...oldArr]
      tmp[index].Title = newTitle
      tmp[index].Desc = newDesc
      return tmp
    })
  }

  const showEdit = () => {
    setEditing(!isEditing)
  }


  return (
    <div>
      <p>
        {isEditing ? (
          <input placeholder="edit Title" value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}/>
        ) : Title}
        {Desc}, 
        {Date}, 
        {index}
      </p>

      <button onClick={() => { remove() }}>remove</button>
      <button onClick={() => { showEdit() }}>edit</button>

      <input placeholder="edit Description" value={newDesc} onChange={(e) => {setNewDesc(e.target.value)}}/>
      <button onClick={() => { }}>cancel</button>
    </div>
  )
}

export default Item
