import React from 'react';
import {Button} from "react-bootstrap";


export const SessaoBotoes = () => {


    return(
        <div className={"mt-4 d-flex column-flex justify-content-around"}>
            <Button href={"https://youtu.be/GS261kWOHWg"} target="_blank" rel="noreferrer noopener" className={"mr-5 btn-danger"} style={{backgroundColor: "#ac0000"}} >Sessão Youtube</Button>
            <Button style={{backgroundColor: "#2c88f7"}} href={"http://bit.ly/update2021zoom"} target="_blank" rel="noreferrer noopener">Sessão Zoom</Button>
        </div>
    )
}