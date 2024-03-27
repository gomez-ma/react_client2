import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from './Customer';
import Comment from './Comment';
import Commentclass from './Comment.class';

function App() {
  return (
	<div className="App">
	  <BrowserRouter>
		<Routes>
			<Route path = "/customer" element={<Customer />} />
			<Route path="/comment" element={<Comment />} />
			<Route path='/commentclass' element={<Commentclass />} />
		 </Routes>
	  </BrowserRouter>
    </div>
  
  );
}

export default App;