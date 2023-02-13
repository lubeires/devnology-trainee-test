import { Routes, Route } from "react-router-dom";

import { Home, Create, Edit, DevGo, NotFound } from "./pages";

import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<Create />} />
          <Route path="/editar/:id" element={<Edit />} />
          <Route path="/devgo" element={<DevGo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
