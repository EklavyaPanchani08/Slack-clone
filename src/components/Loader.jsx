import React from 'react'
import { Audio } from  'react-loader-spinner'

const Loader = () => {
    return (
        <Audio
            height="30"
            width="30"
            radius="10"
            color='black'
            ariaLabel='three-dots-loading'
            wrapperStyle
            wrapperClass
        />
    )
}

export default Loader
