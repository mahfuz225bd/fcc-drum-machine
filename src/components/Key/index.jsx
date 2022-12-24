import React from 'react'
import PropTypes from 'prop-types'
import styles from './Key.module.css'
import { getKeyCode } from '../../assets/js/getKeyCode'

const Key = ({ value, soundName, isPlaying }) => {
    return (
        <div data-key={getKeyCode(value)} className={styles.key + (isPlaying ? ' ' + styles.playing : '')}>
            <kbd>{value}</kbd>
            <span className={styles.soundName}>{soundName}</span>
        </div>
    )
}

Key.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    soundName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

Key.defaultProps = {
    isPlaying: false
}

export default Key
