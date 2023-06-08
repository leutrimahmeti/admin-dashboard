import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";
import Users from "../pages/Users";
import { Todo } from "../pages/Todo";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="board" element={<Todo />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
