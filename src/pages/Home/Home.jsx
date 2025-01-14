import Hero from '../../components/sections/Hero/Hero'
import Designs from '../Designs/Designs'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Designs isHomepage={true}/>
    </div>
  )
}