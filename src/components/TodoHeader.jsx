import React, { useState } from "react";

export default function TodoHeader({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });

    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="new-task-input"
          type="text"
          value={input}
          name="test"
          className="todo-input"
          placeholder="What do you have planned?"
          style={{ width: "600px" }}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="new-task-submit">Add Todo</button>
      </div>
    </form>
  );
}
