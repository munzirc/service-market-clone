import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Slider from "../../components/slider/Slider"
import { Popular, Moving } from "../../constants/Constants"
import ServiceWhy from "../../components/whyandhow/ServiceWhy"
import ServiceHow from "../../components/whyandhow/ServiceHow"
import Reviews from "../../components/reviews/Reviews"

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Featured/>
        <Slider Services={Popular} title={'Most Popular Services in Dubai'} />
        <Slider Services={Moving} title={'Moving & Storage'} />
        <ServiceWhy />
        <ServiceHow />
        <Reviews /> <br/><br/>
    </div>
  )
}
