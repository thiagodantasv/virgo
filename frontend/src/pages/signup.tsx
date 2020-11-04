import React from 'react';
//imports from material-ui
import {Paper, TextField, Button} from '@material-ui/core';
// -----------------------
import './../style/signup.css';
function Signup(){
    return(
        <>
            <h1>Cadastro</h1>
            <div className = "signup-form">
                <Paper elevation = {3} className = "signup-paper">
                    <TextField
                        className = "input-field" 
                        label = "Nome"
                    ></TextField>
                    <TextField
                        className = "input-field"  
                        label = "e-mail"
                        type = "email"
                    ></TextField>
                    <TextField
                        className = "input-field"
                        label = "Senha"
                        type = "password"
                    ></TextField>
                    <TextField
                        className = "input-field"
                        label = "Confirme a sua senha"
                        type = "password"
                    ></TextField>
                    <Button 
                        className = "signup-button" 
                        size = "medium" 
                        variant = "contained" 
                        color = "primary" 
                        onClick = {() => {console.log('button that send the information above to the server')}}
                    >
                        Concluir
                    </Button>
                </Paper>
            </div>
        </>
    );
}

export default Signup;