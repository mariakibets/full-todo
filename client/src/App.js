import React, {usereducer} from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';


function App() {
  const reducer = (state, action) => {
    return state;
  };


  const [state, dispatch] = userreducer({
    user: null,
    task: []
  })
  
  return (
   <BrowserRouter>
       <Routes>
         <Route path = '/' element = {<Home/>}/>
         <Route path = 'tasks' element = {<TodoPage/>}/>
         
       </Routes>
   </BrowserRouter>
  );
}

export default App;
