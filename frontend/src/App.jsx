import { Route, Routes } from "react-router-dom";
import AllQuran from "./componetns/AllQuran";
import Surah from "./componetns/Surah";
import Tes from "./componetns/Tes";
import Navbar from "./componetns/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllQuran />} />
        <Route path="/test" element={<Tes />} />
        <Route path="/surah/:id" element={<Surah />} />
      </Routes>
    </>
  );
}

export default App;
