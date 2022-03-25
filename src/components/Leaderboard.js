import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {leaderboard_day10, leaderboard_day11, leaderboard_day12, desempate, final3} from "../code_battle_leaderboard"

export const Leaderboard  = () => {

    // utility function to sum to object values (without the id)
    const sumItem = ({ equipa, ...a }, b) => ({
        equipa,
        ...Object.keys(a)
            .reduce((r, k) => ({ ...r, [k]: a[k] + b[k] }), {})
    });

    const sumObjectsByKey = (...arrs) => [...
        [].concat(...arrs)
            .reduce((m, o) =>
                    m.set(o.equipa,
                        m.has(o.equipa) ? sumItem(m.get(o.equipa), o) : { ...o }
                    )
                , new Map).values()]

    const leaderboard_total = sumObjectsByKey(leaderboard_day10, leaderboard_day11, leaderboard_day12)
        .sort(function(a,b) {return (a.pontos < b.pontos) ? 1 : ((b.pontos < a.pontos) ? -1 : 0);} )


    return(
        <Tabs  defaultActiveKey="final3" className={"nav-fill"}>
            <Tab tabClassName={"text-dark"} eventKey="final3" title="Final 3" className="p-0">
                <table className="table ">
                    <thead>
                    <tr>
                        <th scope="col">Nome do grupo</th>
                    </tr>
                    </thead>
                    <tbody>
                    {final3.map(row => {
                        return (
                            <tr key={row.key} className={row.equipa == 'OndeTaJogos' && "table-success"}>
                                <th scope="row">{row.equipa}</th>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Tab>
            <Tab tabClassName={"text-dark"} eventKey="total" title="Total" className="p-0">
                <table className="table ">
                    <thead>
                    <tr>
                        <th scope="col">Nome do grupo</th>
                        <th scope="col">Pontuação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leaderboard_total.map(row => {
                        return (
                            <tr key={row.key}
                                className={(row.equipa == 'Parzival' || row.equipa == 'OndeTaJogos' || row.equipa == 'JPTeam') && "table-success"}>
                                <th scope="row">{row.equipa}</th>
                                <td>{row.pontos}
                                {row.pontos == 14 && <span className={"text-danger"}> (DESEMPATE) pontos += {desempate[row.equipa]}</span>}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Tab>
            <Tab tabClassName={"text-dark"} eventKey="day12" title="Dia 12" className="p-0">
                <table className="table ">
                    <thead>
                    <tr>
                        <th scope="col">Nome do grupo</th>
                        <th scope="col">Pontuação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leaderboard_day12.map(row => {
                        return (
                            <tr key={row.key}>
                                <th scope="row">{row.equipa}</th>
                                <td>{row.pontos}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Tab>
            <Tab tabClassName={"text-dark"} eventKey="day11" title="Dia 11" className="p-0">
                <table className="table ">
                    <thead>
                    <tr>
                        <th scope="col">Nome do grupo</th>
                        <th scope="col">Pontuação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leaderboard_day11.map(row => {
                        return (
                            <tr key={row.key}>
                                <th scope="row">{row.equipa}</th>
                                <td>{row.pontos}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Tab>
            <Tab tabClassName={"text-dark"} eventKey="day10" title="Dia 10" className="p-0">
                <table className="table ">
                    <thead>
                    <tr>
                        <th scope="col">Nome do grupo</th>
                        <th scope="col">Pontuação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leaderboard_day10.map(row => {
                        return (
                            <tr key={row.key}>
                                <th scope="row">{row.equipa}</th>
                                <td>{row.pontos}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Tab>
        </Tabs>
    )
}