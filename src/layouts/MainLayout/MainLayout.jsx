import { Outlet } from 'react-router-dom'
import Header from '../../components/common/Header/Header'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
