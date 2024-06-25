import React, { useState } from 'react'

const Procedure  = ({count}) => {
    const [procedureCount, setProcedureCount] = useState(count);

  return (
    <div className='w-full bg-white shadow-lg h-20 rounded-xl flex justify-center'>Procedure {procedureCount} </div>
  )
}

export default Procedure 