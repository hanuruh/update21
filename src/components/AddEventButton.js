import React from "react";
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import moment from "moment";
import {Button, Dropdown } from "react-bootstrap";


export const AddEventButton = () => {
    const startTime = moment("10-02-2021 10:30", "DD-MM-YYYY HH:mm")
    const endTime = moment("12-02-2021 19:00", "DD-MM-YYYY HH:mm")
    const duration = moment.duration(endTime.diff(startTime)).asHours();
    const event = {
        description: 'UPdate 2021',
        duration,
        endDatetime: endTime.format('YYYYMMDDTHHmmssZ'),
        location: 'Porto, Portugal',
        startDatetime: startTime.format('YYYYMMDDTHHmmssZ'),
        title: 'UPdate21',
    }

    const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);


    return <AddToCalendarDropdown
        event={event}
        className={"mt-5"}
        buttonProps={{
            className: "btn btn-outline-light btn-dark dropdown-toggle",
        }}
        linkProps={{
            className: " m-3 text-light"
        }}
        buttonText={"Adicionar ao calendário"}
    />
}