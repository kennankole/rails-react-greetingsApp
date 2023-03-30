import React from "react";
import { useSelector } from 'react-redux';


const Greetings = () => {
  const greeting = useSelector((state) => state.greeting)
  return (
    <div>
      { greeting.isLoading ? <h3>Messages loading......Please wait</h3> : null }
      { greeting.successful ? <h2>Random greeting:  {greeting.greeting.greetings}</h2> : null }
    </div>
  );
};

export default Greetings;
