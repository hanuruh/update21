import React, {useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {Button, Modal} from "react-bootstrap";
import {activities_info} from "../activity_info";

export const Atividades = () => {
    const [showActivityModal, setShowActivityModal] = useState(false);
    const [currentActivity, setCurrentActivity] = useState({});


    return(
        <div className={"container-fluid"} style={{ marginTop: "50px"}}>
            <div className={"row justify-content-center"}>
                <div className={"col-8 d-flex flex-column"}>
                    <img style={{height: "auto", width: "100%"}} src="/update2021/img/atividades_titulo.png" alt=""/>
                </div>
            </div>
            <Splide
                options={ {
                    type   : 'loop',
                    perPage: 3,
                    focus  : 'center',
                    width: "100%",
                    perMove: 1,
                    gap    : '1rem',
                    pagination: false,
                    autoplay: true,
                    arrows: false,
                    interval: 4000
                } }
            >
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["machine_learning"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/ApplicationsofMachineLearninginCancerResearch.png" alt=""/>
                    </div>
                    </SplideSlide>
                <SplideSlide >
                    <div onClick={() => {
                        setCurrentActivity(activities_info["swift"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/BuildinganappinSwiftUI.png" alt=""/>
                    </div>
                 </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["climate"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/ClimateandEnvironmentalImpactsofInformationTechnology.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["redes_sociais"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/RedesSociaisDescentralizadas.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["data_science"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/DataSciencefortheXXICentury.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["surviving_chaos"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/Internet-of-ThingsSurvivingtheChaosbyExpectingIt.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["podcast_pucc"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/Pucc.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["party_update"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/PartyUpdate.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["haskell"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/Haskellandyoushallreceive.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["contentores_linux"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/AprendizagemeimplementaçãodecontentoresLinux.png" alt=""/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div onClick={() => {
                        setCurrentActivity(activities_info["desafios_programacao"])
                        setShowActivityModal(true)
                    }} className={"floating activity"}>
                        <img className={"activity-image"} src="/update2021/img/Atividades/DesafiosdeProgramaçãoePensamentoCriativo.png" alt=""/>
                    </div>
                </SplideSlide>
            </Splide>

            <Modal size={"lg"} show={showActivityModal} onHide={() => setShowActivityModal(false)} centered={true}>
                <Modal.Header closeButton style={{backgroundColor: "#322861"}} className={"text-light"}>
                    <Modal.Title className={"text-center col-12"}>{currentActivity.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"justify-content-center row"}>
                        <img className="h-25 w-50"  src={currentActivity.img_path} alt=""/>
                    </div>
                    <p className="text-justify" dangerouslySetInnerHTML={ { __html: currentActivity.description} }></p>
                    { currentActivity.orador && (<p className="mb-0"><b>Orador:</b> {currentActivity.orador}</p>)}
                    { currentActivity.horario && (<p className="mb-0"><b>Hora:</b> {currentActivity.horario}</p>)}
                    { currentActivity.data && (<p className="mb-0"><b>Data:</b> {currentActivity.data}</p>)}
                    { currentActivity.local && (<span className="mb-0 d-inline-flex"><b>Local:&nbsp;</b> <p dangerouslySetInnerHTML={ { __html: currentActivity.local} }></p></span>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={() => {
                        setCurrentActivity({})
                        setShowActivityModal(false)
                    }}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}