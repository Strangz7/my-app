
import React from 'react'

const MyEvent = ({event}) => {
  return (
    <div className='event-card'>
        <div className='image-container' style={{backgroundImage: 'url(https://images.pexels.com/photos/7406066/pexels-photo-7406066.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7406066.jpg&fm=jpg)'}}>

        </div>
        <div className='event-details'>
            <p>Event Title</p>
            <h5>{event.title}</h5>
            <p>Event Description</p>
            <h5>{event.description}</h5>
        </div>
        <div className='event-actions'>
            <button>View Details</button>
        </div>
    </div>
  )
}

export default MyEvent