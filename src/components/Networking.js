import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {networking_info} from "../activity_info";


export const Networking = () =>{
    const [showNetworkModal, setShowNetworkModal] = useState(false);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <Modal show={showNetworkModal} size={"lg"} onHide={() => setShowNetworkModal(false)} centered={true}>
                    <Modal.Header closeButton style={{backgroundColor: "#322861"}} className={"text-light"}>
                        <Modal.Title className={"text-center col-12"}>Networking</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-justify" dangerouslySetInnerHTML={ { __html: networking_info.description} }></p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-dark" onClick={() => {
                            setShowNetworkModal(false)
                        }}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className={"col-md-6 mb-5 floating"} style={{cursor: "pointer"}} onClick={() => setShowNetworkModal(true)}>
                    <img style={{height: "auto", width: "80%"}} src="/update2021/img/Atividades/SESSÃODENETWORKING10FEVEREIRO2021.png" alt=""/>
                </div>
                <div className={"col-md-6 mb-5 floating"} style={{cursor: "pointer"}} onClick={() => setShowNetworkModal(true)}>
                    <img style={{height: "auto", width: "80%"}} src="/update2021/img/Atividades/SESSÃODENETWORKING12FEVEREIRO2021.png" alt=""/>
                </div>
            </div>
        </div>

    )
}