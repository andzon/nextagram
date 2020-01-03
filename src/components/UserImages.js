import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';



const UserImages = ({userId}) => {

    const [userImages, setUserImages] = useState([]);




    useEffect(() => {
        // performing a GET request
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
            .then(result => {
                console.log(result)
                // If successful, we do stuffs with 'result'
                setUserImages(result.data)
            })
            .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
            })
    }, [])


      return (
        userImages.map(user => {
            return (<img className= "userImages2" width="320" height="240" src={user}></img>)


        })


      )


}







export default UserImages;
