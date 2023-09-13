import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path="/search" element={<Index />} />
        <Route path="/collection" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
