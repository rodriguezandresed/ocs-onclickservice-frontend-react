import React from 'react'
import group from '../../../assets/group.png'
import "./conocenos.css"

const Conocenos = () => {
  return (
    <div className="gpt3__possibility section__padding" id="SobreNostros">
    <div className="gpt3__possibility-image">
      <img src={group} alt="workers" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text"> Conoce un poco mas sobre <br /> nuestra mision en OCS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sed voluptatem dolor id error quam molestiae, earum est a eligendi officia. Ipsum ducimus vel sed ex, fugit culpa quam odio?</p>
      <h4>Conocenos</h4>
    </div>
  </div>
  )
}

export default Conocenos