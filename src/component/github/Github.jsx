import React from 'react'
import { useState, useEffect } from 'react'
function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/zeeshan2002')
            .then(response => response.json())
            .then(data => setData(data))
            console.log(data)
    }, [])

  return (
    <div>
      <div>Github: {data.followers} </div>
      <img src={data.avatar_url} alt="image" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/zeeshan2002')
    return response.json()
}