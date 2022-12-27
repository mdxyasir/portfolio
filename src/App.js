import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path='skills' element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
