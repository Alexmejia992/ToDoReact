import { stringify } from "postcss";
import React, { useContext} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import {GlobalContext} from "../Context/tasksProviders"

import shortid from "shortid";
import Container from "./Container";
import Tasks from "./Tasks";

export default function IndexPage() {
    const [task, setTask] = useState({
        id: '',
        title: '',
        description: ''
      });
    
      // const [task, setTask] = useState("");
      // const [description, setDescription] = useState("");

      const {addTask} = useContext(GlobalContext)
      let navigate = useNavigate();
      
      const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        addTask(task)
        // setTasks([...tasks, { task, description, id: shortid.generate() }]);
        // console.log(tasks);
        // setTask("");
        // setDescription(""); 
        
        navigate('tasks')
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
            name="title"
            placeholder="tittle"
            value={task.title}
            onChange={handleChange}
            required
          />
          <textarea 
            rows="2"
            className="input-text"
            type="text"
            name="description"
            placeholder="description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="Submit"
            value="create"
            className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
          />
        </form>
        {/* {
          tasks.map((items) =>  (
            console.log(items)
          ))
        } */}
      </Container>
     
  );
}
