import axios from 'axios';

export function sendMessage(data) {
    console.log(data)
    axios.post('https://script.google.com/macros/s/AKfycbz0QUpMTgNcn8Y78Zt-A9pPFmVdPaPPtEx5VPXYkeXAzGNkuJU/exec', data)
        .then(response => console.log("made it"))
        .catch(error => console.log("error"));

} 