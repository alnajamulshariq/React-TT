import { useState } from 'react';
import './Todo.css';
import { MdCheck, MdDeleteForever } from "react-icons/md";
export const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [task, setTask] = useState([]);
    const handleValue = (value) =>{
        setInputValue(value);
    }
    const handleForm = (event)=>{
        event.preventDefault();
        if(!inputValue) return;
        if(task.includes(inputValue)){
            setInputValue('');
            return;
        }
        setTask((prevTask)=>[...prevTask, inputValue]);
        setInputValue('');
    }
    return(
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
            </header>
            <section className='form'>

                <form onSubmit={handleForm}>
                    <div>
                        <input style={{color:'black'}} type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event)=>handleValue(event.target.value)}/>
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>

                <section className='myUnOrdList'>
                    <ul>
                        {
                            task.map((curTask, Index)=>{
                                return <li key={Index} className='todo-item'>
                                    <span>{curTask}</span>
                                    <button className='check-btn'><MdCheck /></button>
                                    <button className='delete-btn'><MdDeleteForever/></button>
                                </li>
                            })
                        }
                    </ul>
                </section>

            </section>
        </section>
    );
}