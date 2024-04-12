import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RenderRouter from "./router/routes";

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
