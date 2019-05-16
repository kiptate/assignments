import React from 'react';
import { ReactComponent } from '*.svg';
import { whileStatement } from '@babel/types';
import Square from './Square'

class App extends ReactComponent {
    constructor(){
        super()

        this.state = {
            squares: ['white', 'white', 'white', 'white']
        }
    }
    render(){
        const mappedSquares = this.state.squares.map(square => <Square color={square} />)
        return (
            <div>
                {mappedSquares}
            </div>
        )
    }
}

export default App