import React, { useEffect, useState } from "react";

const initialState = {
    name: "",
    desc: "",
};

const Form = ({ createTodo, auxTodo, updateTodo }) => {
    const [values, setValues] = useState(initialState);
    const { name, desc } = values;

    const handleInputs = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (auxTodo) {
            setValues(auxTodo);
        }
    }, [auxTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "" || desc.trim() === "") {
            alert("Todos los campos son necesarios");
            return;
        }

        if (auxTodo) {
            updateTodo(values);
        } else {
            values.id = Date.now();
            createTodo(values);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={handleInputs}
                name="name"
            />
            <input
                type="text"
                value={desc}
                onChange={handleInputs}
                name="desc"
            />
            <input type="submit" value="Enviar" />
        </form>
    );
};

export default Form;
