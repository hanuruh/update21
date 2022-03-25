import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {code_battle} from "../activity_info";
import {leaderboard_day10, leaderboard_day11} from "../code_battle_leaderboard"
import {Leaderboard} from "./Leaderboard";


export const CodeBattle = () => {

    const [codeBattleModal, setShowCodeBattleModal] = useState(false);
    const [leaderboardModal, setShowLeaderboardModal] = useState(false);
    let i = 0;

    return (
        <div className={"container"}>
            <div className={"row justify-content-center"}>
                <Modal show={codeBattleModal} size={"lg"} onHide={() => setShowCodeBattleModal(false)} centered={true}>
                    <Modal.Header closeButton style={{backgroundColor: "#322861"}} className={"text-light"}>
                        <Modal.Title className={"text-center col-12"}>Code Battle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"justify-content-center row"}>
                            <img className="h-25 w-50"  src="/update2021/img/Atividades/CodeBattle_logo.png" alt=""/>
                        </div>
                        <p dangerouslySetInnerHTML={ { __html: code_battle.description} }></p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-dark" onClick={() => {
                            setShowCodeBattleModal(false)
                        }}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={leaderboardModal} size={"lg"} onHide={() => setShowLeaderboardModal(false)} centered={true}>
                    <Modal.Header closeButton style={{backgroundColor: "#322861"}} className={"text-light"}>
                        <Modal.Title className={"text-center col-12"}>Code Battle Leaderboard</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Leaderboard/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-dark" onClick={() => {
                            setShowLeaderboardModal(false)
                        }}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className={"col-8 code-battle"}>
                    <img className={"floating"} src="/update2021/img/Atividades/CodeBattle.png" alt=""/>
                </div>
                <div className={"col-8"}>
                    <Button className={"btn btn-outline-light btn-dark mt-3 mr-2"} onClick={() => setShowCodeBattleModal(true)}>
                        Inscrição
                    </Button>
                    <Button
                        className={"btn btn-outline-light btn-dark mr-2 mt-3"}
                        href={"https://nucc.dcc.fc.up.pt/nextcloud/s/kLtHKWjBHt2xbqB"}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Replays e outra informação
                    </Button >
                    <Button className={"btn btn-outline-light btn-dark mt-3"} onClick={() => setShowLeaderboardModal(true)}>
                        Leaderboard
                    </Button>
                </div>

            </div>
        </div>


        )
}