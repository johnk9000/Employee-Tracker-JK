import React from "react"
import "./style.css";

function Form() {
return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item.id}>
            {item.name}{" "}
                <button
                className="btn btn-danger ml-5"
                onClick={() => dispatch({ type: "remove", index })}
                >
                X Remove
                </button>
            </li>
            ))}
        </ul>
    </div>
    )
}
export default Form