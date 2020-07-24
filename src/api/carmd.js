import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.carmd.com/v3.0/decode',
    headers: {
        Authorization: 'Basic Y2NmNDIyNzktMDZiMS00ZjZiLTkwZDQtNTk1OGU2Y2I2ZjMz'
    }
});
