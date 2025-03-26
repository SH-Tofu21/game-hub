import axios from "axios";

export default axios.create({
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: '120cd999e664406caf46a4c82a6d0e60'
        }
    }
)