import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'antd/dist/antd.min.css'
import List from "./pages/list";
import RenderRouter from "./router/routes";
// import Form from "./pages/form";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
