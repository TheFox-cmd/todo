function Item({ Title, Desc, Date, index, fn }){
  return (
    <div>
      <p>{ Title }, { Desc }, { Date }, { index }</p>
      
      <button onClick={() => {fn(index)}}>
        deleteItem
      </button>
    </div>
  )
}

export default Item
