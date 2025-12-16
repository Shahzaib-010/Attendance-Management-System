import Signup from 'components/Forms/Signup'
import React from 'react'

function RegisterUser() {
  return (
    <section className="bg-black w-full   p-5 pt-[4vw]">
         
      <div className='flex flex-col items-center justify-center '>
        <h1 className="text-[3vw] font-wix2 text-white">Register User</h1>
        <Signup/>

      </div>
    
    </section>
  )
}

export default RegisterUser