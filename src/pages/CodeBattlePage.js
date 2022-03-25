import React, {useState} from "react";
import {register, login, submitFile} from '../client';
import {NavigationBar} from "../components/NavBar";
const dotenv = require('dotenv');


export const CodeBattlePage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [usernameSubmit, setUsernameSubmit] = useState(null);
    const [passwordSubmit, setPasswordSubmit] = useState(null);

    const handleFileSubmit = e => {
        e.preventDefault();

        var file = document.querySelector('#FormControlFile1');

        if(usernameSubmit == null || passwordSubmit == null){
            window.alert("Preenche os campos de submissão poderes enviar o ficheiro")
            return;
        }

        const requestBody = new FormData();
        const submission = file.files[0];
        requestBody.append("username", usernameSubmit);
        requestBody.append("password", passwordSubmit);
        requestBody.append("file", submission, submission.name);

        if( submission.type != 'application/zip'){
            window.alert("O ficheiro não é um zip")
            return;
        }

        var filename = submission.name.split('.')[0];

        if( filename != usernameSubmit){
            window.alert("Dá o nome do teu grupo ao ficheiro")
            return;
        }

        submitFile(requestBody);
    }

    const divStyle = {
        backgroundSize: 'cover',
        backgroundImage: `url(/update2021/img/fundo_768x1024.png)`,
        width: '100%',
        margin: 0,
        height: "100vh",
        overflowX: "hidden"

    };

    return (
        <div className={"container-fluid"} style={divStyle}>
            <NavigationBar />
            <div className={"row align-items-center justify-content-center  mt-5"}>
                <div className={"col-6"}>
                    <form className="form-inline">
                        <p className="text-light mb-2" htmlFor="exampleInputEmail1">
                            Se já fizeste a inscrição podes registar-te ao pores o mesmo nome do grupo que puseste na inscrição e define uma palavra passe
                        </p>
                        <div className="form-group mr-5">
                            <input onChange={e => setUsername(e.target.value)}className="form-control" id="exampleInputEmail1"
                                    placeholder="Nome do grupo"/>
                        </div>
                        <div className="form-group mr-2">
                            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button onClick={e => {
                            e.preventDefault();
                            register(username, password)
                        }} type="submit" className="btn btn-dark mr-2">Registar</button>

                    </form>
                </div>
            </div>
            <div className={"row align-items-center justify-content-center  text-left text-light mt-5"}>
                <div className={"col-6"}>
                    <form className="form-inline" onSubmit={handleFileSubmit}>
                        <div className="form-group mr-0">
                            <p className="text-light mb-2" htmlFor="exampleFormControlFile1">
                                Se já te registaste entrega o teu código num ficheiro zip com o nome do teu grupo <br/>
                                (e preenche os campos <b>em baixo&nbsp;</b> para submeter)
                            </p>
                            <input type="file" className="form-control-file mb-4" id="FormControlFile1"/>
                            <div className="form-group mr-5">
                                <input onChange={e => setUsernameSubmit(e.target.value)}className="form-control" id="exampleInputEmail1"
                                       placeholder="Nome do grupo"/>
                            </div>
                            <div className="form-group mr-2">
                                <input onChange={e => setPasswordSubmit(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-dark">Submeter</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CodeBattlePage;
