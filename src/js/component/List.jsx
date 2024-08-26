import React, { useState } from "react";


export const List = () => {
    const [input, setInput] = useState("")
    const [task, setTask] = useState([])
    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() === "") return;
        setTask([...task, input]);
        setInput("");
        console.log(input);
    }

    const handleDelete = (indexToDelete) => {
        const updatedTasks = task.filter((_, index) => index !== indexToDelete);
        setTask(updatedTasks);
    }



    return (
        <div className="container">
            <h1>TO DO LIST</h1>
            <div className="card" >
                <form onSubmit={handleSubmit}>
                    <div className="card-header bg-dark">
                        <input type="text" placeholder="New task..." value={input} onChange={handleInput} />
                        <button type="submit" className="btn btn-info m-1" onClick={handleSubmit}>Add</button>
                    </div>
                    <div className="card-body bg-secondary">
                        <ul className="list-group">
                            {task.map((item, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                    {item}
                                    <span className="delete-icon text-danger" onClick={() => handleDelete(index)}>
                                        <i className="fas fa-backspace"></i>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </form>
            </div>
        </div>
    )
}