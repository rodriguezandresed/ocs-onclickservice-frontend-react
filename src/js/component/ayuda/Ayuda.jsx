import React from 'react'
import "./ayuda.css"
import "./article.css"
import aplication from '../../../assets/aplication.png'
import provider from '../../../assets/provider.jpg'
import hands from '../../../assets/hands.jpeg'
import payment from '../../../assets/payment.webp'
import faqs from '../../../assets/faqs.jpg'


const Ayuda = () => {
    return (
        <div className="gpt3__blog section__padding" id="Ayuda">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">¿Necesitas ayuda <br /> con nuestros servicios?</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <div className="gpt3__blog-container_article">
                        <div className="gpt3__blog-container_article-image">
                            <img src={aplication} alt="blog_image" />
                        </div>
                        <div className="gpt3__blog-container_article-content">
                            <div>
                                <h3>Como registrarte como proveedor en OCS</h3>
                            </div>
                            <p>Leer articulo</p>
                        </div>
                    </div>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <div className="gpt3__blog-container_article">
                        <div className="gpt3__blog-container_article-image">
                            <img src={provider} alt="blog_image" />
                        </div>
                        <div className="gpt3__blog-container_article-content">
                            <div>
                                <h3>Como contratar a tu proveedor correcto</h3>
                            </div>
                            <p>Leer articulo</p>
                        </div>
                    </div>
                    <div className="gpt3__blog-container_article">
                        <div className="gpt3__blog-container_article-image">
                            <img src={hands} alt="blog_image" />
                        </div>
                        <div className="gpt3__blog-container_article-content">
                            <div>
                                <h3>Asegura una buena reputacion en OCS</h3>
                            </div>
                            <p>Leer articulo</p>
                        </div>
                    </div>
                    <div className="gpt3__blog-container_article">
                        <div className="gpt3__blog-container_article-image">
                            <img src={payment} alt="blog_image" />
                        </div>
                        <div className="gpt3__blog-container_article-content">
                            <div>
                                <h3>Proceso de pago</h3>
                            </div>
                            <p>Leer articulo</p>
                        </div>
                    </div>
                    <div className="gpt3__blog-container_article">
                        <div className="gpt3__blog-container_article-image">
                            <img src={faqs} alt="blog_image" />
                        </div>
                        <div className="gpt3__blog-container_article-content">
                            <div>
                                <h3>Preguntas frecuentes</h3>
                            </div>
                            <p>Leer articulo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ayuda