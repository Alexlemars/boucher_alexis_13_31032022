import React from 'react';
import './Error-404.css'
import {Link} from 'react-router-dom'

/**
 * It's displayed when error 404
 * @returns {ReactElement} Error404 component
 */


const Error =()=> {
    
        return (
            
                <main className="Error404">
                <div className="Content-error-404">
                    <span className="Number-error-404">404</span>
                    <p className="Text-error-404">
                        Oups ! La page que vous demandez n'existe pas
                    </p>
                </div>
                <Link className="Back-Home" to="/">
                    Retourner sur la page d'accueil
                </Link>
            </main>
                
        );
    }


export default Error;