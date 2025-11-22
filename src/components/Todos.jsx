import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleCompleted } from '../features/todo/todoSlice'



export const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(null);
    const [newText, setNewText] = useState("");

    const handleEditClick = (todo) => {
        setIsEditing(todo.id)
        setNewText(todo.text)
    }
    const handleSaveClick = (id) => {
        if (newText.trim() !== "") {
            dispatch(updateTodo({ id, text: newText }))
            setIsEditing(null)
            setNewText("")
        }
    }

    return (
        <>
            <div>
                Todos:-
            </div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-6 flex w-full justify-between 
                        items-center bg-zinc-700 px-4 py-2 rounded-2xl"
                        key={todo.id}
                    >
                        <div className='flex gap-3 items-center w-full'>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={() => dispatch(toggleCompleted(todo.id))}
                                className="w-4 h-4 cursor-pointer"
                            />
                            {isEditing === todo.id ? (
                                <input
                                    type="text"
                                    value={newText || ""}
                                    onChange={(e) => setNewText(e.target.value)}
                                    className="rounded w-full px-3 py-1 text-white 
                                    bg-transparent border outline-none"
                                />
                            ) : (
                                <div className={`text-white ${todo.completed ? "line-through opacity-75" : ""}`}>
                                    {todo.text}
                                </div>
                            )}
                        </div>


                        {/* Delete Button */}

                        <div className='flex items-center gap-2'>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="inline-flex w-14 h-10 rounded-lg m-2 items-center duration-500
                            text-sm border border-black/10 bg-red-500 hover:bg-red-700 shrink-0"
                            >
                                X
                            </button>
                            {/* Edit, Save Button */}
                            {isEditing === todo.id ? (
                                <button
                                    onClick={() => handleSaveClick(todo.id)}
                                    className="inline-flex w-14 h-10 rounded-lg text-sm m-2 items-center
                                    bg-green-500 hover:bg-green-700 duration-500 shrink-0"
                                >
                                    💾
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEditClick(todo)}
                                    className="inline-flex w-14 h-10 rounded-lg text-sm items-center
                                    m-2 bg-green-500 hover:bg-green-800 duration-500 shrink-0"
                                >
                                    🖋️
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul >
        </>
    )
}