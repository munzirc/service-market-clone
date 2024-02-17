import Hero from "../../components/hero/hero"
import List from "../../components/list/List"
import "./home.scss"
import Slider from "../../components/slider/Slider"
import { Popular, Moving, Cleaning, Maintenance, Salon, AcServices, Health, PestControl, Gardening, Nannies, PetServices, Painting, Other} from "../../constants/Constants"
import ServiceWhy from "../../components/whyandhow/ServiceWhy"
import ServiceHow from "../../components/whyandhow/ServiceHow"
import Reviews from "../../components/reviews/Reviews"
import FeaturedIn from "../../components/featured/FeaturedIn" 
import Locations from "../../components/locations/Locations"
import FooterNavigation from "../../components/footer/FooterNavigation"
import Footer from "../../components/footer/Footer"
import { Box } from "@mui/material"
import {homehero} from '../../../src/constants/HeroConstants.js'


export default function Home() {
  return (
    <Box>
        <Hero herocontent={homehero}/>
        <Slider Services={Popular} title={'Most Popular Services in Dubai'} />
        <Slider Services={Moving} title={'Moving & Storage'} />
        <Slider Services={Cleaning} title={'Cleaning Services '} />
        <Slider Services={Maintenance} title={'Maintenance & Handyman'} />
        <Slider Services={Salon} title={'Salon at Home'} />
        <Slider Services={AcServices} title={'AC Services'} />
        <Slider Services={Health} title={'Health at Home '} />
        <Slider Services={PestControl} title={'Pest Control'} />
        <Slider Services={Gardening} title={'Gardening'} />
        <Slider Services={Nannies} title={'Nannies and Maids'} />
        <Slider Services={PetServices} title={'Pet Service'} />
        <Slider Services={Painting} title={'Painting'} />
        <Slider Services={Other} title={'Other'} />
        <ServiceWhy />
        <ServiceHow />
        <Reviews /> 
        <FeaturedIn />
        <Locations/>
        <FooterNavigation/>
        <Footer />
    </Box>
  )
}
