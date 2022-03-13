// import React from 'react';
// import ReactDOM from 'react-dom';

// imports from esm.sh
// using modern browser ES-modules imports
import React from 'https://esm.sh/react'
import ReactDOM from 'https://esm.sh/react-dom'

const app = (
    `<div>
        <h1>Hello world</h1>
    </div>`
)

ReactDOM.render(
    app, 
    document.getElementById('app')
);
