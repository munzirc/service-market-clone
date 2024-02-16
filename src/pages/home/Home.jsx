import Featured from "../../components/home/Home"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Slider from "../../components/slider/Slider"
import { Popular, Moving } from "../../constants/Constants"
import ServiceWhy from "../../components/whyandhow/ServiceWhy"
import ServiceHow from "../../components/whyandhow/ServiceHow"
import Reviews from "../../components/reviews/Reviews"
import FeaturedIn from "../../components/featured/FeaturedIn" 
import Locations from "../../components/locations/Locations"
import FooterNavigation from "../../components/footer/FooterNavigation"
import Footer from "../../components/footer/Footer"


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Featured/>
        <Slider Services={Popular} title={'Most Popular Services in Dubai'} />
        <Slider Services={Moving} title={'Moving & Storage'} />
        <ServiceWhy />
        <ServiceHow />
        <Reviews /> 
        <FeaturedIn />
        <Locations/>
        <FooterNavigation/>
        <Footer />
    </div>
  )
}
