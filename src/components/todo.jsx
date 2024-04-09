import React from 'react'

function Todo(){
  return (
    <div>
<h1 className='text-center text-violet-700 mt-10 font-bold text-4xl '>TODO LIST</h1>
        <div className='flex gap-3 pt-6'>

        <button className="bg-blue-700">Add task</button>
        <button className="">Completed</button>
        </div>
    </div>
  )
}

export default Todo;