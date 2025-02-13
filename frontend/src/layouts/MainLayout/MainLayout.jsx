import { Outlet } from 'react-router-dom'
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import classes from './MainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.maincontent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
