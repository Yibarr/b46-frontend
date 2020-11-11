import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { posts } from '../../utils/https.js' 

const PostCreator = () => {
  const { user } = useContext(AuthContext)
  const [description, setDescription] = useState('')
  
  const descriptionType = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  const publish = async () => {
    try {
      const body = {
        description,
        author: user.id
      }
      console.log(body);
      const response = await posts.create(body)

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Descripción</span>
          </div>
          <textarea className="form-control" onChange={descriptionType} value={description} aria-label="With textarea"/>
          <div className="input-group-append">
            <span className="btn btn-outline-secondary" onClick={publish}>Publicar</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default PostCreator
