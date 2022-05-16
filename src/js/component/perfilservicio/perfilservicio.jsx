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
                    <h2 className="modal-title" id="exampleModalLabel">Editar datos</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Nombre y apellido:</label>
                        <input type="text" className="form-control" id="recipient-name"/>
                    </div>
                    <div className="mb-3">
                        <label for="recipient-user" className="col-form-label">Usuario:</label>
                        <input type="text" className="form-control" id="recipient-user"/>
                    </div>
                    <div className="mb-3">
                        <label for="recipient-email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"/>
                    </div>
                    <div className="mb-3">
                        <label for="recipient-pagina-web" className="col-form-label">Página web:</label>
                        <input type="text" className="form-control" id="recipient-pagina-web"/>
                    </div>
                    </form>
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
                                            <h4>Página web</h4>
                                        </div>
                                        <div className="col-7 datos-perfil mt-3">
                                            <p>prueba.com</p>
                                        </div>
                                        <div className="col-2">
                                           <button type="button" className='edita-tu-perfil' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><i className="fa-solid fa-pencil fa-2x edit-perfil"></i> </button> 
                                        </div>
                                       
                                       
                                    </div>
                                
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
                                <i className="fa-solid fa-location-dot fa-2x mx-2"></i>  Direcciones
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                <i className="fa-solid fa-user-tie fa-2x mx-2"></i>  Servicios
                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
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
