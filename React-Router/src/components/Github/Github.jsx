import React, { use, useState } from 'react'

function Github() {
    const[data, setData] = useState([])
    React.useEffect(() => {
        fetch('https://api.github.com/users/Krishna-Sah26/followers')
            .then(res => res.json())
            .then(data => console.log(data));
            setData(data)

    }   , [])
  return (
    <div className='bg-gray-600 m-4 text-white text-3xl p-4'>Github Followers: {data.length}
    <img src ={data.avatar_url} alt='Git picture' width={300} height={300}/>
    </div>
    
  )
}

export default Github
