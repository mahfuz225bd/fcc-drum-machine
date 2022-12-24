import React from 'react'
import styles from './KeyPad.module.css'

const KeyPad = ({ children }) => {
    return (
        <div className={styles.keypad}>{children}</div>
    )
}

export default KeyPad