import "./App.css";
import {
  AllGenres,
  Navbar,
  BasicCard,
  Footer,
} from "./Components/AllData/DataContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  // console.log(import.meta.env.VITE_APP_API_KEY )
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllGenres />}></Route>
        <Route path="/:id" element={<BasicCard />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
