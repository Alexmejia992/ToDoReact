import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layouts/Layout";

import AppRouter from "./Router/AppRouter";

export default function App() {
  return (
    <div>
      <Router >  
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </div>
  );
}
