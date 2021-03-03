import React from 'react'
import Header from './Header'

function WelfareForm({handleNext, handleBack}) {
    return (
        <div>
            <Header handleNext={handleNext} handleBack={handleBack}/>
            <h3>form here</h3>
            
        </div>
    )
}

export default WelfareForm