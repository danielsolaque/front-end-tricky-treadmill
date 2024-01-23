import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={ 
          <div>
            Hola mundo
          </div>
        } /> 
        <Route path="/machine" element={<div>
          Machine Route
        </div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
