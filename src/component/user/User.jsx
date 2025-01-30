import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { id } = useParams([])
  return (
    <div className='justify-center text-center bg-gray-400 text-black py-2 ' >User: {id}</div>
  )
}

export default User