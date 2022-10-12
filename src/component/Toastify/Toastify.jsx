import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Toastify() {
    const notify = () => toast("Wow so easy!");
  return (
      <div>
          <div className='font-bold text-xl text-center'>Something</div>
          <button className='btn' onClick={notify}>Notify!</button>
      </div>
  )
}

export default Toastify