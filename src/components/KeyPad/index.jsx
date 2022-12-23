import React from 'react'
import styles from './KeyPad.module.css'

const KeyPad = (props) => {
    return (
        <div className={styles.keypad}>{props.children}</div>
    )
}

export default KeyPad