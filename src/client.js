import axios from "axios";

const dotenv = require('dotenv').config();

const url = "https://176.79.91.155:443"

export const register = async (username, password) => {
    await axios({
        method: 'post',
        url: url + '/register',
        headers: {
            'Access-Token': process.env.REACT_APP_TOKEN, //the token is a variable which holds the token,
            'Access-Control-Allow-Origin': '*'
        },
        data: {
            username: username,
            password: password
        }
    });
}

export const submitFile = async (requestBody) => {
    await axios({
        method: 'post',
        url: url + "/submissions/submit",
        headers: {
            'Access-Token': process.env.REACT_APP_TOKEN ,//the token is a variable which holds the token,
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
        },
        data: requestBody
    })
}

export const getAllowedUsers = async () => {
   await axios({
        method: 'get',
        url: url + '/users/allowed',
    })
        .then(function (response) {
            console.log(response)
        });
}

export const getSubmissionsDays = async (days) => {
    await axios({
        method: 'post',
        url: url + '/submissions/list/days',
        data: {
            days: days
        }
    });
}

export const getLeaderBoard = async () => {
    await axios({
        method: 'get',
        url: url + '/submissions/leaderboard',
    })
        .then(function (response) {
            console.log(response)
        });
}

export const login = async (username, password) => {
    await axios({
        method: 'post',
        url: url + '/user/login',
        data: {
            username: username,
            password: password
        }
    });
}