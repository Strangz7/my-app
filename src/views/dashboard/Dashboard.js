import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Container from '../../components/dashboard/Container'
import MyEvent from './pages/MyEvents'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Container>
            <Routes>
                <Route path='/' element={<MyEvent/>}/>
            </Routes>
        </Container>
    </div>
  )
}

export default Dashboard