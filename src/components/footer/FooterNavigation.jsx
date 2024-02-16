import { Box , Typography, styled} from "@mui/material";
import { services } from "../../constants/ServicesConstants";

const Component = styled(Box)`
   padding: 50px 100px 0 100px;
   display: flex;
   margin-top: 60px;
   background-image: url('https://servicemarket.imgix.net/dist/images/footer-background.jpg');
`;

const Content = styled(Box)`
   text-align: left;
   padding: 0 50px 10px 0;
`;

const Heading = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    color:#fff;
    margin-bottom: 10px;
`;

const Link = styled('a')({
    display:'block',
    color:'#fff',
   fontSize: 18,
   textDecoration:'none',
   marginBottom: 5,
   '&:hover':{
       textDecoration: 'underline'
   }
})

const FooterNavigation = () => {

    return(
       <Component>
        {
           services.map(service => (
                <Content>
                    {
                        service.map(servicecol => (
                            <Box>
                            <Heading>{servicecol.heading}</Heading>
                            {
                                servicecol.content.map(item => (
                                    item ? <Link href="#">{item}</Link> : <br/>
                                ))
                            }
                            <br/>
                            </Box>
                        ))
                   }
                </Content>
            )) 
        }
       </Component>
    )
}

export default FooterNavigation;