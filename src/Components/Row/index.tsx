import React from 'react';
import styleClasses from './style.module.css'

const Row = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styleClasses.Row}>
            {children}
        </div>
    )
}

export default Row;