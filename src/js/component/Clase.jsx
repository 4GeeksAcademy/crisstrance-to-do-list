import React, { useState } from "react";

export const ToDoList = () => {
    const [toDo, setToDo] = useState("Add a new to do..")
    const handleToDo = (event) => {
        event.preventDefault();
        const dataToSend = {
            toDo: toDo
        }
        setToDo(event.target.value);
        console.log(dataToSend)
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center col-md-6 m-4" onSubmit={handleToDo}>
                <label for="inputCity" className="form-label">TO DO LIST</label>
                <input type="text" className="form-control" id="inputCity" placeholder={toDo} onChange={handleToDo} />
                <button type="submit" className="btn btn-primary m-2">Submit</button>
            </div>
        </div>
    );
};