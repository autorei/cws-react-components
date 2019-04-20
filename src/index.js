import React from 'react'
import { render } from 'react-dom'
import { Button } from './lib'

const App = () => (
    <div style={{ width: 640, margin: '15px auto' }}>
        <h1>Hello React</h1>
        <Button>
            Button test
        </Button>
    </div>
);

render(<App />, document.getElementById('root'))