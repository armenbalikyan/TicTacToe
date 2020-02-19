import React, { useState } from 'react'
export class Player {
    constructor(props) {
        let win = 0;
        let lose = 0;
        let toe = 0;
        const [figure, setFigure] = useState('');
        move();
    }
    move = (choice, field) => {
        field[choice[0]][choice[1]] = this.figure;
    }
}