import React, {useState} from 'react'; 

const Home = () => {
    const [todo, addTodo] = useState([]);
    const [inputVal, setInputVal] = useState(false);
    let input;

    const handleChange = (value) => {
        console.log(`value is ${value}`);
        todo.push(value);
        setInputVal(true);
    }

    return (
        <div>
            <header>
                <form>
                    <input type="text" placeholder="Enter your todo item" ref={node => {input=node}}></input>
                    <button onClick={(e) => { e.preventDefault(); handleChange(input.value); input.value = ''; }}>Add todo</button>
                </form>
            </header>
            {
                inputVal && todo && todo.forEach(key => <p>{key}</p>)
            }
        </div>
    )
}

export default Home;