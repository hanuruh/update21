import React from "react";
import SectionTitle from "../styled-components/SectionTitle";



export const Patrocinios = () =>{
    return (
        <div className={"container-fluid"}>
            <SectionTitle font={"60"} width={"100%"} textShadowSize={"2px 2px"}>
                Patrocínios
            </SectionTitle>

            {/*Patrocínios Insane*/}
            <div className={"mt-5 justify-content-center row"}>
                <SectionTitle insane font={"60"} width={"80%"} textShadowSize={"2px 2px"}>
                    Insane
                </SectionTitle>
            </div>

            <div className={"mt-md-5 mt-3 justify-content-center row"}>
                <div className="col-12 flex-column justify-content-center ">
                    <img width={"70%"} height={"70%"} src="/update2021/img/sponsors/Insane/bosch.svg" alt={""}/>
                </div>
            </div>


            {/*Patrocínios Gold*/}
            <div className={"mt-1 justify-content-center row"}>
                <SectionTitle font={"50"} width={"70%"} textShadowSize={"2px 2px"}>
                    Gold
                </SectionTitle>
            </div>

            <div className={"mt-md-5 mt-3 justify-content-center row"}>
                <div className="col-12 flex-column justify-content-center ">
                    <img width={"60%"} height={"60%"} src="/update2021/img/sponsors/Gold/criticalManufacturing.svg" alt={""}/>
                </div>
                <div className="col-12 flex-column justify-content-center ">
                    <img width={"60%"} height={"60%"} src="/update2021/img/sponsors/Gold/vodafone.svg" alt={""}/>
                </div>
                <div className="col-12 flex-column justify-content-center  ">
                    <img width={"60%"} height={"60%"} src="/update2021/img/sponsors/Gold/criticalSoftware.svg" alt={""}/>
                </div>
            </div>


            {/*Patrocínios Silver*/}
            <div className={"mt-4 justify-content-center row"}>
                <SectionTitle font={"30"} width={"60%"} textShadowSize={"2px 2px"}>
                    Silver
                </SectionTitle>
            </div>
            <div className={"mt-3 justify-content-center row p-md-5"}>
                <div className="col-5 flex-column justify-content-center ">
                    <img width={"55%"} height={"55%"} src="/update2021/img/sponsors/Silver/altice.svg" alt={""}/>
                </div>
                <div className="col-5 flex-column justify-content-center ">
                    <img width={"55%"} height={"55%"} src="/update2021/img/sponsors/Silver/s21sec.svg" alt={""}/>
                </div>
                <div className="col-5 flex-column justify-content-center">
                    <img width={"55%"} height={"55%"} src="/update2021/img/sponsors/Silver/natixis.png" alt={""}/>
                </div>
                <div className="col-5 flex-column justify-content-center">
                    <img width={"60%"} height={"60%"} src="/update2021/img/sponsors/Silver/mindSource.svg" alt={""}/>
                </div>
            </div>

            {/*Patrocínios Bronze*/}
            <div className={"mt-md-2 mt-4 justify-content-center row"} >
                <SectionTitle font={"20"} width={"60%"} textShadowSize={"1px 1px"}>
                    Bronze
                </SectionTitle>
            </div>
            <div className={"justify-content-center row mt-md-5 mt-3"}>
                <div className="col-3  col-sm-3  flex-column justify-content-center ">
                    <img width={"55%"} height={"55%"} src="/update2021/img/sponsors/Bronze/BNPParibas_logo.png" alt={""}/>
                </div>
                <div className="col-2 col-sm-2 flex-column justify-content-center">
                    <img width={"70%"} height={"70%"} src="/update2021/img/sponsors/Bronze/HUUB.svg" alt={""}/>
                </div><div className="col-3 col-sm-3 flex-column justify-content-center">
                    <img width={"55%"} height={"55%"} src="/update2021/img/sponsors/Bronze/fmq.svg" alt={""}/>
                </div>
            </div>

            {/*Parceiros*/}
            <div className={"mt-md-4 mt-3 justify-content-center row"}>
                <SectionTitle font={"15"} width={"50%"} textShadowSize={"1px 1px"}>
                    Parceiros
                </SectionTitle>
            </div>
            <div className={"justify-content-center row mt-md-5 mt-2"}>
                <div className="col-2  flex-column  ">
                    <img width={"55%"} height={"40%"} src="/update2021/img/sponsors/Parceiros/fcup.png" alt={""}/>
                </div>
                <div className="col-2  flex-column ">
                    <img width={"55%"} height={"40%"} src="/update2021/img/sponsors/Parceiros/ipdj.svg" alt={""}/>
                </div>
                <div className="col-2  flex-column ">
                    <img width={"45%"} height={"40%"} src="/update2021/img/sponsors/Parceiros/dcc.svg" alt={""}/>
                </div>
            </div>
    </div>
    )
}