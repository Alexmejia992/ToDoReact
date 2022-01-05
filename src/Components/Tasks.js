import React, { useContext } from "react";
import Container from "./Container";

import { GlobalContext } from "../Context/tasksProviders";

export default function Tasks({}) {
  const { tasks } = useContext(GlobalContext);

  return (
    <Container>
      {tasks.map((task) => {
        return (
          <div className="flex flex-col justify-center items-center  my-4 mx-2 h-5-r bg-gray-900  z-3 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm cursor-pointer">
            <p> {task.title} </p>
          </div>
        );
      })}
    </Container>
  );
}
