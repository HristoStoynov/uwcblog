import React from 'react'
import styles from './index.module.css'

const Input = ({ label, id, onChange, value }) => {
    return (
        <div>
            <label htmlFor={id}>
                {label}:<br />
                <input id={id} value={value} className={styles.loginInput} onChange={onChange} />
            </label>
        </div>
    )
}

export default Input