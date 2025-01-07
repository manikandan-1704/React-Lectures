import './AddTask.css';
import { useState } from 'react';
export const AddTask = () => {
    const [taskValue, setTaskValue] = useState("");

    return (
        <section className="addtask">
            <form>
                <input onChange={(e) => setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder='Task Name' autoComplete='off' />
                <button type="submit">Add Task</button>
            </form>
            <p>{taskValue.length}</p>
        </section>
    )
}