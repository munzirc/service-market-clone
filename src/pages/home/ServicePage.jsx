import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import Hero from "../../components/hero/hero";
import { Box , Typography, styled} from "@mui/material";
import Heading from "../../components/headings/Heading";
import Cards from "../../components/cards/ServiceCards";
import ServiceHow from "../../components/whyandhow/ServiceHow";
import ServiceWhy from "../../components/whyandhow/ServiceWhy";
import FooterNavigation from "../../components/footer/FooterNavigation";
import Footer from "../../components/footer/Footer";

const Find = styled(Box)`
   padding: 50px 100px;
`;

const FindContent = styled(Typography)`
   font-size: 18px;
`;

const ServicePage = ({servicedata, pagedetails}) => {
    

    const {location, setSearchBar,setNavbarSearch,index} = useContext(DataContext)
    
    const [pagedata, setPagedata] = useState(pagedetails[index]);

    const search = pagedata.hero.search;

    setSearchBar(search);

    useEffect(()=> {
        setNavbarSearch(!search);
        setPagedata(pagedetails[index]);
        return () =>{
            setNavbarSearch(false);
        }
    }, [index,pagedetails]);


    const findtitle = pagedata.find.title.replaceAll('{place}',location);
    const findcontent = pagedata.find.content.replaceAll('{place}',location);
    return(
        <Box>
            <Hero herocontent={pagedata.hero}/>
            <Find>
               <Heading title={findtitle}/>
               <FindContent>{findcontent}</FindContent>
            </Find>
            <Cards servicedata={servicedata}/>
            <ServiceHow />
            <ServiceWhy />
            <FooterNavigation />
            <Footer />
        </Box>
    )
}

export default ServicePage;