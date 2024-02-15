
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import Card from "./card/Card";
import "./list.scss";

export default function List() {
  return (
    <div className="list">
        <span className="listTitle">Most Popular Services in Dubai </span>

        <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
        />
            <div className="container">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
              
            </div>
            <ArrowForwardIosOutlined
          className="sliderArrow right"
        />
        </div>
    </div>
  )
}
