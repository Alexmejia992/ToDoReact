import React from "react";
import Container from "./Container";

export default function Tasks({ data, description, handleClick, id }) {
  return (
    <Container >
      <div className="flex flex-col justify-center items-center  my-4 mx-2 h-5-r bg-gray-900  z-3 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm cursor-pointer">
        <h1 className="">hello world from tasks</h1>
      </div>
    </Container>
  );
}
