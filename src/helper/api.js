import axios from "axios";

const API_URL = 'https://random-data-api.com/api'

async function getUsers() {
    const res = await axios.get(`${API_URL}/users/random_user?size=16`);
    return res.data;
}

async function getUser() {
    const res = await axios.get(`${API_URL}/users/random_user`);
    return res.data;
}

export { getUsers, getUser };