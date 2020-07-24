import React from 'react'
import styles from './index.module.css'

const Input = ({ label, id, onChange, value, type }) => {
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <div>
            <label htmlFor={id}>
                {label}:<br />
                <input id={id} value={value} className={styles.loginInput} onChange={handleChange} type={type} />
            </label>
        </div>
    )
}

export default Input