import Hero from '../../components/sections/Hero/Hero'
import FeaturedServices from '../../components/sections/Featured Services/FeaturedServices'
import Designs from '../Designs/Designs'
import './Home.css'
import Testimonials from '../../components/sections/Testimonials/Testimonials';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Designs isHomepage={true}/>
      <FeaturedServices isHomepage={true}/>
      <Testimonials />
    </div>
  );
}