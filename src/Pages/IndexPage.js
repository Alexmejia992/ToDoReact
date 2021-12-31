import React from "react";
import { useState, useEffect } from "react";

import shortid from "shortid";
import Container from "../Components/Container";
import Layout from "../Components/Layouts/Layout";
import SideBar from "../Components/SideBar";


export default function IndexPage() {
    const [tasks, setTasks] = useState([
        // {name: 'Alexander', shortid: shortid('')}
      ]);
    
      const [task, setTask] = useState("");
      const [description, setDescription] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // const {name, value} = event.target;
        // alert(name);
        setTasks([...tasks, { task, description, id: shortid.generate() }]);
        setTask("");
        setDescription("");
        alert(task)
      };
    
      const removeTask = (id) => {
        const modifiedTasks = tasks.filter((item) => item.id !== id);
        setTasks(modifiedTasks);
      };
  return (
      <Container>
        {/* {tasks.length === 0 ? '' : <Expire delay="3000">You have {tasks.length} pending tasks.</Expire>} */}
        <form
          className="h-full flex flex-col justify-evenly items-center"
          onSubmit={handleSubmit}
        >
          <div className="font-poppins text-white text-2xl tracking-wider">
            Create Notes
          </div>
          <input
            className="input-text"
            type="text"
            placeholder="tittle"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <input
            className="input-text"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="Submit"
            value="create"
            className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
          />
        </form>
        {/* { tasks.length === 0 ? <h1>No Tasks Found</h1> :  tasks.map((item) => {
          return(
            < Tasks key={item.id} data={item.task} description={item.description} id={item.id} handleClick={removeTask} />
          )
        })} */}
      </Container>
     
  );
}
