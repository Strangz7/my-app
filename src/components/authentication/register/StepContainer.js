import React from 'react'

const StepContainer = ({children, step}) => {
  return (
    <div className='registration-step-container'>
        <div className='step-icon'>
            {`step ${step}`}
        </div>
        {children}
    </div>
  )
}

export default StepContainer