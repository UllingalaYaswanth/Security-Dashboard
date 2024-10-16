import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Members from './pages/Members'
import Messages from './pages/Messages'
import Prjects from './pages/Projects'
import WorkPlan from './pages/WorkPlan'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='members' element= {<Members/>} />
        <Route path = 'messages' element={<Messages />} />
        <Route path = 'projects' element= {<Prjects />} />
        <Route path='workplan' element={<WorkPlan/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App