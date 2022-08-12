import React from 'react'
import "./myEvents.css"
import MyEvent from './MyEvent';

const MyEvents = () => {
  return (
    <div className='my-events-container'>
      <div className='my-events-header'>
        <div className='my-events-header-filter'>
          <div >
            <p>Filter by date:</p>
            <input type="date" id='filter-date'/>
          </div>
          <div>
            <p>search Events</p>
            <input type="search" id='filter-search'/>
          </div>
        </div>
        
        <button>Create Event</button>
      </div>
      <div className='my-events-cards'>
          <MyEvent />
      </div>
    </div>
  )
}

export default MyEvents