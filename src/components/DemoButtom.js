import React from 'react'

function DemoButtom() {

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
  return (
    <div
    className='h-8  '>
        <button  onClick={goToTop}
        title='Demo Drive' className=' 
         text-white border-white border-2 px-16 h-11 w-72 rounded-md font-bold shadow hover:text-black hover:bg-white delay-1000 duration-700 ease-out'>Demo Drive</button>
    </div>
  )
}

export default DemoButtom