import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./TaskList.css";

export const TaskList = ({concept}) => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ]);
    const [show, setShow] = useState(true);
    const styles = {
        color: show ? "3D8361 " : "#be3434",
        border: "2px solid",
        borderColor: show ? "#3D8361" : "#be3434",
        borderRadius: "5px",
        padding: "20px"
    }
    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
        <section className = "tasklist">
        <h1 style = {styles}>Task List</h1>
        <ul>
            <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide" : "show "}</button>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} concept={concept} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
        <BoxCard result="success">
            <p className="title">Lorem ipsum dolor sit amet.</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
        </BoxCard>

        <BoxCard result="warning">
            <p className="title">Lorem ipsum dolor sit.</p>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, eum odit! Labore eaque fuga repellat adipisci molestias quasi animi fugiat</p>
        </BoxCard>
        </section>
  )
}