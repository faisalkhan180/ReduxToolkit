
import "./App.css";
import { Suspense, useState, lazy } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

// const Mycomponent = lazy(()=> import("./components/Mycomponent"));

function App() {

  // const [count, setCount] = useState(0);
  
  return (
   
      // <>
      // <Suspense fallback={<p>This Is Loading</p>}>
      // <Mycomponent state = {count} />
      // </Suspense>
      // <button onClick={()=>setCount(count+1)}>count</button>

      // <HOCRed cmp={Count} />
      // </>
      <div>
        <h1>React Redux ToolKit</h1>
        <AddTodo />
        <Todo />
      </div>
   
  );
}

export default App;

// function HOCRed(props){
//   return(
//     <div style={{background:"red", width: "100px", height: "100px"}}>
//      <props.cmp />
//     </div>
    
//   )
// }

// function Count(){
//   const [count, setCount] = useState(0);
//   return(
//     <>
//     <h2> {count} </h2>
//     <button onClick={()=>setCount(count +1 )}> increment</button>
//     </>
//   )
// }