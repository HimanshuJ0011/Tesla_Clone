import React, { useEffect, useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false);
  const [countdata, setCountdata] = useState('');
  let count = 10;
  useEffect(()=>{
    if(open){
    
    setCountdata(count);
  }else{
    count = 12
    setCountdata(count)
  }
})

console.log("open : ", open)
  return (
    <div>
        <button className='border border-gray-400' onClick={()=>{setOpen(!open)}}>Click here </button>
        {!open ? 
        (<div className='text-red-400'> ye navbar hai or isse navbar khte hai {countdata}</div>):(
          <div> navbar nhi hai ye {countdata}</div>
        )
      }
    </div>
  )
}


export default Navbar;