import { ApiService } from "../apiService";


const todoEndpoint=ApiService.injectEndpoints({
    endpoints: (builder) => ({
        getTodo: builder.query({
          query: () => `/todo`,
        }),
        postTodo:builder.mutation({
            query:(formData)=>({
                method:"POST",
                url:"/todo",
                body:formData,
            })
        }),
        deleteTodo:builder.mutation({
            query:(id)=>({
                method:"DELETE",
                url:`/todo/${id}`,
            })
        }),
        editTodo:builder.mutation({
            query:(id,...formData)=>({
                method:'PUT',
                url:`/todo/${id}`,
                body:formData
            })
        })
      }),
})

export const{useGetTodoQuery,usePostTodoMutation,useDeleteTodoMutation,useEditTodoMutation}=todoEndpoint