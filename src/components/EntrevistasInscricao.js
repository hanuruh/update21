import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
export const EntrevistasInscricao = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={"container"}>
            <div className={"row justify-content-center mt-4"}>
                <div className={"col-lg-6 col-sm-12 floating"}>
                    <img style={{height: "auto", width: "100%"}} src="/update2021/img/entrevistas_anuncio.png" alt="" />
                </div>
            </div>
            <Button className={"btn btn-outline-light btn-dark mt-3 mb-5"} onClick={handleShow}>
                + Info
            </Button>

            <Modal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton style={{backgroundColor: "#322861"}} className={"text-light"}>
                    <Modal.Title className={"text-center col-12"}>Entrevistas Profissionais</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"row mt-3"}>
                        <div className={"col-4"}>
                            <img src="/update2021/img/sponsors/Gold/criticalManufacturing.svg" alt={""}/>
                        </div>
                        <div className={"col-4"}>
                            <img  src="/update2021/img/sponsors/Gold/vodafone.svg" alt={""}/>
                        </div>
                        <div className={"col-4"}>
                            <img  src="/update2021/img/sponsors/Gold/criticalSoftware.svg" alt={""}/>
                        </div>
                    </div>
                    <div className={"row mt-4 mb-4"}>
                        <div className={"col-3"}>
                            <img src="/update2021/img/sponsors/Silver/natixis.svg" alt={""}/>
                        </div>
                        <div className={"col-3"}>
                            <img  src="/update2021/img/sponsors/Silver/mindSource.svg" alt={""}/>
                        </div>
                        <div className={"col-3"}>
                            <img src="/update2021/img/sponsors/Silver/altice.svg" alt={""}/>
                        </div>
                        <div className={"col-3"}>
                            <img  src="/update2021/img/sponsors/Silver/s21sec.svg" alt={""}/>
                        </div>

                    </div>
                    <p align={"justify"}>Nesta edição do UPDATE, damos-te a oportunidade de teres um contacto
                    direto com várias empresas, através de entrevistas individuais totalmente online!
                    <br/>
                    <br/>
                    Durante três dias, tens a oportunidade de demostrares os teus conhecimentos,
                    ampliares a tua experiência, e quem sabe, encontrares o teu emprego de sonhos.
                    Podes e deves aproveitar esta oportunidade para para ficares mais à vontade com
                        este ambiente, mesmo que atualmente não estejas no mercado de trabalho!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

