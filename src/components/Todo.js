import React from "react";

const Todo = ({ todo, deleteTodo, setAuxTodo, updateEstado }) => {
    const { name, desc, estado } = todo;

    const cambiarEstado = (data) => {
        data.estado = !data.estado;
        updateEstado(data);
    };
    return (
        <div>
            <hr />
            <p>{name}</p>
            <p onClick={() => cambiarEstado(todo)}>
                {desc} - {estado ? "verde" : "rojo"}
            </p>
            <div>
                <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
                <button onClick={() => setAuxTodo(todo)}>Modificar</button>
            </div>
            <hr />
        </div>
    );
};

export default Todo;
