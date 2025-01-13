import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/list/:type"
        element={
          <List
            match={{
              params: {
                type: "",
              },
            }}
          />
        }
      />
    </Routes>
  </Layout>
);

export default App;
