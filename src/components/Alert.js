import React from 'react'

export default function Alert( props ) {

    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type) + ": "}</strong> {props.alert.message}
        </div>
    )
}
