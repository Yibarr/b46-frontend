import React, { useEffect, useState } from 'react'
import { PostCreator } from '../../components/index.js'
import { useParams } from 'react-router-dom'
import { users } from '../../utils/https.js'
import './Profile.css'

const Profile = () => {
  const  { id } = useParams()
  const [user, setUser] = useState({})


  const getUser = async () => {
    try {
      const response = await users.findOne(id)
      setUser(response.data.payload)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])

  return (
    <React.Fragment>
      <header className="photify-profile-header py-5">
        <div>
          <img className="photify-profile-picture" src={user.profile_img} alt="Profile"/>
          <h2 className="text-center" >{ user.first_name }</h2>
          <h4 className="text-center">{ user.last_name }</h4>
        </div>
      </header>
      <main>
        <PostCreator/>
      </main>
    </React.Fragment>
  )
}

export default Profile
