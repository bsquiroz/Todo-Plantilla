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
            {desc} -{" "}
            {estado ? (
                <button
                    onClick={() => cambiarEstado(todo)}
                    className="btn completo"
                >
                    Completo
                </button>
            ) : (
                <button
                    onClick={() => cambiarEstado(todo)}
                    className="btn incompleto"
                >
                    Incompleto
                </button>
            )}
            <div>
                <button className="btn " onClick={() => deleteTodo(todo.id)}>
                    Eliminar
                </button>
                <button className="btn " onClick={() => setAuxTodo(todo)}>
                    Modificar
                </button>
            </div>
            <hr />
        </div>
    );
};

export default Todo;
