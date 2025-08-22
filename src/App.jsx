
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./Pages/NotFound";
import { Home } from "./Pages/Home";
import { Toaster } from "./Components/ui/Toaster";



function App() {
  return (
    <>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
