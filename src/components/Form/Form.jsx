import React, { useState } from 'react'

const Form = () => {
  console.log('Se ha creado el componente')
  const [title, setTitle] = useState('Título')
  const [subtitle, setSubtitle] = useState('Subtítulo')
  
  const handleTitle = (e) => {
    setTitle(e.target.value)
  } 
  const handleSubtitle = (e) => {
    setSubtitle(e.target.value)
  } 
  return (
    <React.Fragment>
      <h1> { title } </h1>
      <h3> { subtitle } </h3>
      <input onChange={handleTitle} value={title}/>
      <input onChange={handleSubtitle} value={subtitle}/>
    </React.Fragment>
  )
}

export default Form
