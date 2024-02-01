import { Route, Routes } from "react-router-dom"
import PageLayout from "./Layouts/PageLayout"
import Home from './pages/home/Home'
import Auth from "./pages/auth/Auth"
import Profile from './pages/profile/Profile'

const App = () => {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/:username" element={<Profile/>}/>
        </Routes>
      </PageLayout>
    </>
  )
}

export default App