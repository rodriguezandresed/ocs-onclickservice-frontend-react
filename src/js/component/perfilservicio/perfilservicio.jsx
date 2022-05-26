import React from 'react'
import './perfilservicio.css'
export const Perfilservicio = () => {

  return (
    <>
            {/* modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">Información del servicio</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="rom">                        
                        <div className="col-12">
                            <h4>Tipo de servicio</h4>
                            <p>Plomeria</p>
                        </div>
                        <div className="col-12">
                            <h4>Descripción del servicio</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-12">
                            <h4>Experiencia en el area</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-12">
                            <h4>Imagenes del trabajo</h4>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                    <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Boat on Calm Water"
                                    />

                                    <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Wintry Mountain Landscape"
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Mountains in the Clouds"
                                    />

                                    <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Boat on Calm Water"
                                    />
                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Waves at Sea"
                                    />

                                    <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Yosemite National Park"
                                    />
                                </div>
                                </div>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn actualizar">Actualizar</button>
                </div>
                </div>
            </div>
            </div>
            {/* desarrollo página  */}
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 col-md-2 ">

                </div>
                <div className="col-12 col-md-8 box-perfil px-0 pt-0 ">
                    <div className="fondo-perfil">
                        <div className="row ">
                            <div className="col-9">
                            </div> 
                            <div className="col-3 d-flex justify-content-end clasficacion px-4 my-4">
                                <p>4.5</p><i className="fa-regular fa-star fa-1x mx-2 mt-2"></i> 
                            </div>
                        </div>
                     
                    </div>
                    <div className="row d-flex align-items-center px-5 pb-3">
                        <div className="col-5 foto-perfil">
                            
                        </div>
                        <div className="col-7 date-perfil pt-4">
                            <h2>Maria Fernanda</h2>
                            <h3>mariafernanda24</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 ">

                </div>
                 <div className="col-12 col-md-2 ">

                </div>
                <div className="col-12 col-md-8 mt-4 informacion-perfil">
                   
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <i className="fa-solid fa-user fa-2x mx-2"></i> Datos personales
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">

                                    <div className="row">
                                        <div className="col-5 mt-3">
                                            <h4>Usuario</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>CristhianCotte</p>
                                        </div>
                                        <div className="col-5 mt-3">
                                            <h4>Nombre y apellido</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>Cristhian Cotte</p>
                                        </div>
                                        <div className="col-5 mt-3">
                                            <h4>Dirección</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>Distrito Capital</p>
                                        </div>
                                        <div className="col-5 mt-3">
                                            <h4>Correo</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>prueba@gmail.com</p>
                                        </div>
                                        <div className="col-5 mt-3">
                                            <h4>Redes sociales</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>prueba@gmail.com</p>
                                        </div>
                                        <div className="col-5 mt-3">
                                            <h4>Ciudad</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>Distrito Capital</p>
                                        </div>
                                        <div className="col-5 mt-3">
                                            <h4>Página web</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>prueba.com</p>
                                        </div>
                                        
                                       
                                       
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                <i className="fa-solid fa-user-tie fa-2x mx-2"></i>  Servicios
                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body list-servicios">
                                   <p><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Plomeria</a></p> 
                                   <p><a href="#">Electricidad</a></p> 
                                   <p><a href="#">Chef</a></p> 
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <i className="fa-solid fa-shield-halved fa-2x mx-2"></i> Seguridad
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <i className="fa-solid fa-comments fa-2x mx-2"></i>  Comentarios
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <h4>Autor</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus assumenda vero, ut debitis impedit id sapiente quia eos adipisci iusto, dolorum recusandae excepturi! Quos error totam vel facere eligendi!</p>
                                        </div>
                                        <div className="carousel-item">
                                        <h4>Autor</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus assumenda vero, ut debitis impedit id sapiente quia eos adipisci iusto, dolorum recusandae excepturi! Quos error totam vel facere eligendi!</p>
                                        </div>
                                        <div className="carousel-item">
                                        <h4>Autor</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus assumenda vero, ut debitis impedit id sapiente quia eos adipisci iusto, dolorum recusandae excepturi! Quos error totam vel facere eligendi!</p>
                                        </div>
                                    </div>
                
                                    </div>
                                   

                                </div>
                             </div>
                              
                            </div>
                           
                            </div>

                </div>
                <div className="col-12 col-md-2 ">

                </div>
            </div>    
        </div>        
    </>
    )
}