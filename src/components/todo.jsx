import React from 'react'

function Todo(){
  return (
    <div>
<h1 className='text-center text-violet-700 mt-10 font-bold text-4xl '>TODO LIST</h1>
        <div className='flex gap-52 pt-6  mb-6 justify-center'>

        <button className="text-indigo-50 rounded-lg p-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Add task</button>
        
        <button className="bg-purple-700 text-indigo-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg p-2">Completed</button>
        </div>
        
        <div className="flex justify-center">

        <input placeholder='Enter a task' className='w-96 p-3'></input>
        </div>
    </div>
  )
}

export default Todo;