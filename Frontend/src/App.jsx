import React, { useState } from 'react'

const App = () => {


  const [notes, setNotes] = useState('')
 


  return (
    <div className='bg-white flex justify-between '>
    <div className="h-[100vh] bg-gray-200 rounded-xl flex-col justify-center py-3  px-8">
      <h1 className='text-xl my-3 font-bold'>Docket</h1>
      <img className='h-10 my-7' src='add.png' alt="" />
    </div>
    <div className="h-[100vh] bg-gray-200 w-[91%] px-5 py-3">
        <input className=' h-8 my-3 px-5 py-2 rounded-2xl border-1  ' type="text" placeholder='search..' />
        <h1 className='text-4xl my-3 font-bold'>Notes</h1>
        {/* Now Notes  */}
        <div className="h-[80vh] bg-pink-200 grid grid-cols-4 gap-4">
          {/* card */ }
          <div className=' h-60  bg-emerald-600 w-60 rounded-2xl'>

            <h1 className='m-3 text-2xl font-semibold'>This is heading</h1>

            <p className='mx-3 my-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore harum sit cum dolorum doloremque ullam atque nam maiores commodi!  </p>

          </div>
          
          
        </div>
        
    </div>
    </div>
  )
}

export default App