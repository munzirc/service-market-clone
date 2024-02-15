import { Box, Grid, Typography ,styled} from "@mui/material";
import Heading from "../headings/Heading";

const Component = styled(Box)`
   padding: 60px 100px 0 100px;
`;

const Subtitle = styled(Typography)`
    font-size: 18px;
    text-align: left;
`;

const ContentGrid = styled(Grid)`
   border-radius: 5px;
   margin-top: 15px;
`;

const ItemGrid = styled(Grid)`
  text-align:center;
  padding: 30px 40px; 
`;


const ServiceHow = () => {

    const details = [
        {
            image:'https://sm-prod-content.imgix.net/wp-content/uploads/2018/11/2.2-1.png?fit=crop&w=260&h=185&auto=format,compress&q=46',
            title:'Tell us what you need',
            content: 'Let us know what service you are looking for. We offer more than 25 different home services, and we are here to help!'
        },
        {
            image:'https://sm-prod-content.imgix.net/wp-content/uploads/2018/11/1.2.png?fit=crop&w=260&h=185&auto=format,compress&q=46',
            title:'We will find the right professional',
            content: 'Book your service directly with us online, or request quotes from our service partners. All our partners are licensed, vetted and reviewed by our users'
        },
        {
            image:'https://sm-prod-content.imgix.net/wp-content/uploads/2018/08/2.3.png?fit=crop&w=260&h=185&auto=format,compress&q=46',
            title:'Sit back and relax',
            content: 'Let our professionals do the work while you focus on doing what you love. Our contact center is open 7 days a week to help you along the way'
        }
    ]

    return(
        <Component>
            <Heading title={'How it works '}/>
            <Subtitle>We have partnered with Dubai's best companies to get you the service you deserve</Subtitle>
            <ContentGrid container lg={12} md={12}>
                {
                   details.map(detail => (
                    <ItemGrid item lg={4}>
                        <img src={detail.image} alt="" style={{marginBottom: 15, height: 200}}/>
                       <Typography style={{fontSize: 24, fontWeight:600}}>{detail.title}</Typography>
                       <Typography style={{fontSize: 18, marginTop: 10}}>{detail.content}</Typography>
                    </ItemGrid>
                   )) 
                }
            </ContentGrid>
        </Component>
    )
}

export default ServiceHow;