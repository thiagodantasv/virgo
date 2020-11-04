import React from 'react';
import './../style/landing.css';

function Landing(){
    return(
        <>
            <header>
                <h1>Você no controle das suas carteiras de investimentos</h1>
            </header>
            <div className = "landing-page-button">
                <button onClick = { ()=> {console.log('i am a sign up button')} }>Cadastre-se</button>
            </div>
        </>
    );
}

export default Landing;