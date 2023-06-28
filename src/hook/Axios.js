import Axios from "axios";


const SuperFetch = Axios.create({
    baseURL:process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})
export default SuperFetch