import React from 'react';
import styleClasses from './style.module.css'

type Props = {
    color: string;
}

const AreciboSquare = ({ color }: Props) => {
    return (
        <div
            style={{ backgroundColor: color }}
            className={styleClasses.AreciboSquare}>

        </div>
    )
}

export default AreciboSquare;