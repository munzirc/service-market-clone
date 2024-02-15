import { Box, Grid, Typography ,styled} from "@mui/material";
import Heading from "../headings/Heading";

const Component = styled(Box)`
   padding: 50px 100px 0 100px;
`;

const Subtitle = styled(Typography)`
    text-align: left;
    font-size: 18px;
`;

const ContentGrid = styled(Grid)`
   border: 1px solid #dfdfdf;
   border-radius: 5px;
   margin-top: 15px;
`;

const ItemGrid = styled(Grid)`
  padding: 30px 40px;
  text-align:center;
  &:nth-child(even){
    border-right: 1px solid #dfdfdf;
    border-left: 1px solid #dfdfdf;
  }
  
`;


const ServiceWhy = () => {

    const details = [
        {
            image:'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/home.png?fit=crop&h=48&auto=format,compress',
            title:'Everything your home needs',
            content: 'We have made it our business to make it easy for you to get any help you might need for your home in one place.'
        },
        {
            image:'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/favorites.png?fit=crop&h=48&auto=format,compress',
            title:'The best professionals for your job',
            content: 'We measure and manage our service partners on their service quality to make sure our service is great.'
        },
        {
            image:'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/support.png?fit=crop&h=48&auto=format,compress',
            title:'Great customer service',
            content: 'We take customer service seriously. Our contact center is open 7 days per week to help you out with anything you need.'
        }
    ]

    return(
        <Component>
            <Heading title={'Why ServiceMarket?'}/>
            <Subtitle>We are a leading home services marketplace in the Middle East with a large and growing customer base.</Subtitle>
            <ContentGrid container lg={12} md={12}>
                {
                   details.map(detail => (
                    <ItemGrid item lg={4}>
                        <img src={detail.image} alt="" style={{marginBottom: 15}} />
                       <Typography style={{fontSize: 24, fontWeight:600}}>{detail.title}</Typography>
                       <Typography style={{fontSize: 18, marginTop: 10}}>{detail.content}</Typography>
                    </ItemGrid>
                   )) 
                }
            </ContentGrid>
        </Component>
    )
}

export default ServiceWhy;