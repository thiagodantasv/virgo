import React from 'react';
import { Link } from 'react-router-dom';
import './../style/landing.css';

function Landing(){
    return(
        <>
            <header>
                <h1>Você no controle das suas carteiras de investimentos</h1>
            </header>
            <div className = "landing-page-button">
                <Link to = "/signup"><button>Cadastre-se</button></Link>
            </div>
        </>
    );
}

export default Landing;