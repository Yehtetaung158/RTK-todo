import React from "react";
import FormComponent from "./components/FormCpmponents";
import ListComponent from "./components/ListComponent";
import { useGetTodoQuery } from "./store/service/endpints/todo.endpint";

const App = () => {
  const { isError, isLoading, isSuccess, data, refetch } = useGetTodoQuery();
    // console.log(isSuccess)
  const refetchHandel=()=>{
    refetch()
  }
  
  return (
    <div className="flex flex-col">
      <div className=" fixed top-0 left-0 right-0">
      {<FormComponent refetchHandel={refetchHandel}/>}
      </div>
      <div>
      {isLoading ? <h1>Loading...</h1> : <>
      {isError ? <h1>Error</h1> : <div> {data?.map((i)=>(
          <ListComponent key={i.id} d={i} refetchHandel={refetchHandel}/>
      ))}</div> }</>}
      </div>
    </div>
  );
};

export default App;
