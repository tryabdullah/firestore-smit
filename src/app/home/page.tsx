"use client";

import { saveTodo } from "@/firebase/firebasefirestore";
import { useState } from "react"


export default function Home() {
    const [todo, setTodo] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <>
            <h1>Hello Home</h1>
            <input type="text"
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
            />
            <input type="checkbox" id="complete" onClick={(e)=>{ setIsCompleted(!isCompleted);}} />
            <label htmlFor="complete">completed</label>
            <br />
            <button onClick={() => {
                saveTodo(todo, isCompleted)
            }}>Add New Todo</button>
        </>
    )
}