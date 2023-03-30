import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from "./Greetings";
import { fetchGreetings } from "../redux/greetings/greetingSlice";
const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchGreetings());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;