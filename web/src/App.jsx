import { Routes, Route } from "react-router-dom";

import { Login, Register, Home, Create, Edit, DevGo, NotFound } from "./pages";

import { Navbar, RequireAuth } from "./components";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 border rounded border-tertiary p-4">
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/novo"
            element={
              <RequireAuth>
                <Create />
              </RequireAuth>
            }
          />
          <Route
            path="/editar/:id"
            element={
              <RequireAuth>
                <Edit />
              </RequireAuth>
            }
          />
          <Route
            path="/devgo"
            element={
              <RequireAuth>
                <DevGo />
              </RequireAuth>
            }
          />
          <Route path="/entrar" element={<Login />} />
          <Route path="/registrar" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
