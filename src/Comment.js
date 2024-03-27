import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";

function Comment() {
  //const id = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => {
        setData(response.data);
        console.log("API WAS CALLED");
      });
  }, []);
  return (
    <>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.email}
         </li>
       ))}
      </ul>
    </>
  );
}

export default Comment;
