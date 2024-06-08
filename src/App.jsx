import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Read from "./Read";
import Create from "./Create";
import Update from "./Update";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/crud-app" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
