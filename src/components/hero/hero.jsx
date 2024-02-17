import { Call, ChatBubble, Person, Star, VerifiedUser } from "@material-ui/icons";
import styled from '@emotion/styled';
import "./hero.scss";
import SearchBar from '../search/SearchBar';
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";



const Hero = ({herocontent}) =>{

  const {location, setLocation, searchBar} = useContext(DataContext);
  
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imageurl, setImageurl] = useState('');

  useEffect(()=>{
    setTitle(()=>searchBar ? herocontent.title.replaceAll('{place}', location) : herocontent.title);
    setSubtitle(herocontent.subtitle.replaceAll('{place}', location));
    setImageurl(herocontent.backgroundimage);
  },[location, herocontent])


  return (
    <div className="featured" >
        <div className="container" style={{ backgroundImage: imageurl}}>
            <h1 className="heading1">{title}</h1>
            <h2 style={{marginBottom: 30}} className="heading2">{subtitle}</h2>
            {herocontent.serach && <SearchBar/>}
        </div>

        <div className="lowerContainer">
          <div class="tags"><Person/> 150,000+ </div>
          <div class="tags"><ChatBubble/> Over 15,000 reviews </div>
          <div class="tags"><Star/> Rated 4.8 out of 5 </div>
          <div class="tags"><VerifiedUser/> Trusted service professionals </div>
          <div class="tags"><Call/> Live customer support </div>
        </div>
        
    </div>
  );
}

export default Hero;
