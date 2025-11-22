import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export const AddTodo = () => {

    const [input, setInput] = React.useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() === "") 
            return  // agar input blank hai toh return kar do
        dispatch(addTodo(input.trim()))
        setInput("")
    }



    return (
        <form onSubmit={addTodoHandler}
            className='flex mt-20 space-x-1'>
            <input type="text"
                placeholder='Write Todo....'
                value={input || ""}
                onChange={(e) => setInput(e.target.value)}
                className='text-black bg-gray-500 w-full border-black/10
            rounded-b-lg rounded-t-md p-3 outline-none'
            />
            <button type='submit'
                className='w-36 bg-gray-700 outline-none hover:outline-none
            duration-700 hover:bg-gray-900'
            >
                Add Todo
            </button>
        </form>
    )
}


