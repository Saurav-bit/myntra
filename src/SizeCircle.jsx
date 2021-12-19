import React from 'react'
import "./SizeCircle.css"

function SizeCircle(props) {
    // console.log(props)
    return (
        <div className='size-btn-wrapper'>
            <div className='size-btn-inner'>
                <button className='size-buttons-size-button-default'>
                    <p className='size-buttons-unified-size'>
                   {props.number}
                    </p>
                </button>
            </div>
            
        </div>
    )
}

export default SizeCircle
