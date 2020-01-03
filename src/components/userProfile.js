import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import UserImages from './UserImages'



const UserProfile = () => {
    const  {id}  = useParams()
    console.log(id)
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        Axios.get(`http://insta.nextacademy.com/api/v1/users/${id}`)
            .then(result => {
                console.log(result)
                setUser(result.data)
                // setLoading(false)
            })

    }, [id])

    return (
        
<div>
    {user ?
    <>
    <div className= "ProfileInfo">
        <img className= "ProfileImage" width="320" height="240" src={user.profileImage}></img>
        <h1>{user.username}</h1>
    </div>
        <div><UserImages userId={user.id} /></div>
    </>
    : null
    }
    
</div>    )
}


export default UserProfile