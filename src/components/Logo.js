import {AddEventButton} from "./AddEventButton";
import React from "react";
import ToBeAnounced from "../styled-components/ToBeAnounced";
import {EntrevistasInscricao} from "./EntrevistasInscricao";
import Arrow from "../styled-components/Arrow";
import {Atividades} from "./Atividades";
import {Networking} from "./Networking";
import {SessaoBotoes} from "./SessaoBotoes";
import {CodeBattle} from "./CodeBattle";
import {Horario} from "./Horario";
import {NavigationBar} from "./NavBar";
import {BrowserRouter as Router} from "react-router-dom";

const divStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(/update2021/img/fundo_768x1024.png)`,
    width: '100%',
    margin: 0
};

export const Logo = () => {
    return (
        <div style={divStyle}>
            {/*<NavigationBar />*/}
            <div style={{height: "100vh"}} className={"d-flex flex-column align-items-center justify-content-center "}>
                <img style={{height: "auto", width: "100%"}} src="/update2021/img/logo_2021.svg" alt="" />
                <AddEventButton/>
                <SessaoBotoes/>
            </div>
            <div>
                <CodeBattle/>
                <EntrevistasInscricao id={"test"}/>
                <Networking />
                <Atividades/>
                <Horario/>
            </div>
        </div>
    )
}