import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

const initialState = [
    {
        id: 1,
        name: "barrer",
        desc: "tengo barrer toda la maldita casa",
        estado: false,
    },
    {
        id: 2,
        name: "sacudir",
        desc: "tengo sacudir toda la maldita casa",
        estado: false,
    },
    {
        id: 3,
        name: "trapear",
        desc: "tengo trapear toda la maldita casa",
        estado: false,
    },
    { id: 4, name: "dormir", desc: "tengo dormir todo el dia", estado: false },
];

function App() {
    const [todos, setTodos] = useState(initialState);
    const [auxTodo, setAuxTodo] = useState(null);

    const createTodo = (todo) => {
        setTodos([todo, ...todos]);
    };

    const deleteTodo = (id) => {
        let aux = todos.filter((todo) => todo.id !== id);
        setTodos(aux);
    };

    const updateTodo = (Utodo) => {
        let aux = todos.map((todo) => (todo.id === Utodo.id ? Utodo : todo));
        setTodos(aux);
    };

    const updateEstado = (Utodo) => {
        let aux = todos.map((todo) => (todo.id === Utodo.id ? Utodo : todo));
        setTodos(aux);
    };

    return (
        <div>
            <Form
                createTodo={createTodo}
                auxTodo={auxTodo}
                updateTodo={updateTodo}
            />
            {todos &&
                todos.map((todo) => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        deleteTodo={deleteTodo}
                        setAuxTodo={setAuxTodo}
                        updateEstado={updateEstado}
                    />
                ))}
        </div>
    );
}

export default App;
