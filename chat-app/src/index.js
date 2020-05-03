import socketIOClient from "socket.io-client"

const socket = socketIOClient('http://localhost:5000');
socket.on('connect',  function() {
    socket.send('hey')
    socket.on('message',function (msg) {

    })
});


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
//
// function App() {
//     return (
//         <Button variant="contained" color="primary">
//             Hello World
//         </Button>
//     );
// }
//
// ReactDOM.render(<App />, document.querySelector('#app'));