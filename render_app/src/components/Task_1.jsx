import React from 'react'

function Task_1() {
    const [arr, setArr] = useState(["first", "second", "third"]);

    const [input, setInput] = useState("");
    const [editedId, setEditedId] = useState(-1);

    const edit = (index) => {
        if (editedId === index) {
            setEditedId(-1);
            let copy = Object.assign([], arr);
            copy[index] = input;
            setArr(copy);
            setInput("");
        } else {
            setEditedId(index);
        }
    };

    return (
        <div>
             <br/><br/> task 1 <br/>
            <ul>
                {arr.map((item, index) => {
                    return (
                        <li>
                            {editedId === index ? (
                                <input
                                    value={input}
                                    onChange={event => setInput(event.target.value)}
                                />
                            ) : (item)}{" "}
                            <button onClick={() => edit(index)}>
                                {editedId === index ? "Изменить" : "Редактировать"}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Task_1