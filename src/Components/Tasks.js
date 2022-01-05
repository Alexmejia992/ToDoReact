import React, { useContext } from "react";
import Container from "./Container";
import {
  BsFillTrashFill,
  BsFillBookmarkCheckFill,
  BsFillBookmarkXFill,
} from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

import { GlobalContext } from "../Context/tasksProviders";

export default function Tasks({}) {
  const { tasks } = useContext(GlobalContext);

  return (
    <>
    {tasks.length === 0 ? <h1>Hello World</h1> : 
      tasks.map((task) => {
        return (
          <div
            tabindex="0"
            className=" collapse w-96 bg-gray-700 rounded-lg my-2"
          >
            <div className="collapse-title text-xl font-medium flex flex-row justify-between ">
              <h3 className="text-white align-baseline"> {task.title} </h3>
              <div className="flex flex-row">
                <TasksIcon
                  // key={task.id}
                  text="done"
                  icon={<BsFillBookmarkCheckFill size="20" />}
                />
                <TasksIcon
                  // key={task.id}
                  text="failed"
                  icon={<BsFillBookmarkXFill size="20" />}
                />
              </div>
            </div>
            <div class="collapse-content flex flex-row justify-around ">
              <div className="">
                <p className="text-lg mb-2 break-words">{task.description}</p>
              </div>
              <div className="flex flex-row ">
                <TasksIcon
                  // key={task.id}
                  text="remove task"
                  icon={<BsFillTrashFill size="20" />}
                />
                <TasksIcon
                  // key={task.id}
                  text="edit task"
                  icon={<FaPencilAlt size="20" />}
                />
              </div>
            </div>
          </div>
        );
      })
    }
      
    </>
  );
}

const TasksIcon = ({ icon, text = "some" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
