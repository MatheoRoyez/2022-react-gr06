import * as FETCH from "./api-calls";
import axios from 'axios';

export const get = /*async*/ (action) => {
    return /*await axios.get(FETCH.ACTION[action]);*/ FETCH.ACTION[action]
}


