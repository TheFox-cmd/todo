import { useState } from "react";

function Item({ Title, Desc, Date, index, fn }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [editTitle, setEditTitle] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

  const remove = () => {
    fn((oldArr) => {
      let tmp = [...oldArr];
      tmp.splice(index, 1);
      return tmp;
    });
  };

  const edit = () => {
    fn((oldArr) => {
      let tmp = [...oldArr];
      tmp[index].Title = newTitle;
      tmp[index].Desc = newDesc;
      return tmp;
    });
  };

  return (
    <div>
      {
        // Title rendering
      }
      <div>
        {editTitle ? (
          <input
            placeholder="Edit Title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditTitle(false);
                edit();
              }
            }}
            autoFocus={true}
            onBlur={() => {
              setEditTitle(false);
              edit();
            }}
          />
        ) : (
          <div
            onClick={() => {
              setNewTitle(Title);
              setNewDesc(Desc);
              setEditTitle(!editTitle);
            }}
          >
            {Title}
          </div>
        )}
      </div>
      {
        // Description rendering
      }
      <div>
        {editDesc ? (
          <input
            placeholder="Edit Description"
            value={newDesc}
            onChange={(e) => {
              setNewDesc(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditDesc(false);
                edit();
              }
            }}
            autoFocus={true}
            onBlur={() => {
              setEditDesc(false);
              edit();
            }}
          />
        ) : (
          <div
            onClick={() => {
              setNewTitle(Title);
              setNewDesc(Desc);
              setEditDesc(!editDesc);
            }}
            style={{
              minHeight: "20px",
              minWidth: "30px",
            }}
          >
            {Desc}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          remove();
        }}
      >
        remove
      </button>
    </div>
  );
}

export default Item;
