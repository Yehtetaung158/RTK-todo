import React, { useState } from "react";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
} from "../store/service/endpints/todo.endpint";
import { ApiService } from "../store/service/apiService";

const ListComponent = ({ d, refetchHandel }) => {
  const [dt] = useDeleteTodoMutation();
  const [edId, data] = useEditTodoMutation(ApiService);
//   console.log(data);
  const [isEdit, setIsedit] = useState(true);
  const [isTextEdit,setTextEdit]=useState(d.text)
  return (
    <ul className="max-w-md mx-auto mt-4">
      <li>
        <div>
          {<h1>{d.id}</h1>}{" "}
          <h1>
            {isEdit ? (
              <>{data?.originalArgs?.data.text ? <p>{data?.originalArgs?.data.text}</p> : <p>{d.text}</p>}</>
            ) : (
              <>
                <input
                  className=" px-2 py-2 rounded-lg "
                  type="text"
                  value={isTextEdit}
                  onChange={(e)=>setTextEdit(e.target.value)
                  }
                />
                <button
                onClick={async()=>{
                    await edId({
                        id:d.id,
                        data:{
                            text:isTextEdit,
                            completed: true 
                        }
                    }),
                    setIsedit(!isEdit)
                }}
                className=" bg-green-600 px-4 p-2 rounded-lg ml-2 active:bg-yellow-500 ">
                  {" "}
                  Ok
                </button>
              </>
            )}
          </h1>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => (dt(d.id), refetchHandel())}
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => edId(setIsedit(!isEdit))}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Edit
          </button>
        </div>
      </li>
    </ul>
  );
};

export default ListComponent;
