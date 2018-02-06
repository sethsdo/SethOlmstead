import axios from 'axios';

export function sendMessage(data) {
    console.log(data)
    axios.post('https://script.google.com/macros/s/AKfycbwJuo29XYqVAIgzOKf0qMTSr5SeiOjQeqyeZlTn-xj41v0MElw/exec', data)
        .then(response => console.log("made it"))
        .catch(error => console.log("error"));

} 