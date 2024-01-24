import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Components/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/brands"
          element={
            <div>This is the list of brands where the reviews come from.</div>
          }
        />
        <Route
          path="/models"
          element={<div>This is teh list of models per brand.</div>}
        />
        <Route
          path="/reviews"
          element={<div>This is the list of reviews per model</div>}
        />
        <Route
          path="/review_creation"
          element={<div>New Form for review.</div>}
        />
        <Route path="/review_edit" element={
          <div>Here Im going to edit my reviews</div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
