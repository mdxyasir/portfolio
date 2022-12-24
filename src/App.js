import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
