import { Box,Grid,Typography, styled } from "@mui/material";
import Heading from "../headings/Heading";

const Component = styled(Box)`
   padding: 50px 100px 0 100px;
`;
const Container = styled(Box)`
   display: flex;
`;
const Subtitle = styled(Typography)`
    text-align: left;
    font-size: 18px;
`;

const ContentGrid = styled(Grid)`
`;

const ItemGrid = styled(Grid)`
   text-align: left;
   padding: 20px 30px 0 0;
`;

const Locations = () =>{

    const locations = [
        {
            area:'United Arab Emirates',
            areas:['Abu Dhabi','Dubai','Sharjah']
        },
        {
            area:'Qatar',
            areas:['Doha']
        },
        {
            area:'Saudi Arabia',
            areas:['Jeddah','Riyadh','Dammam']
        },
        {
            area:'Oman',
            areas:['Muscat']
        },
        {
            area:'Kuwait',
            areas:['Kuwait City']
        },
        {
            area:'Bahrain',
            areas:['Manama']
        },
    ];

    return(
        <Component>
            <Heading title={'ServiceMarket locations'}/>
            <Subtitle style={{marginBottom: 30}}>We are currently available in:</Subtitle>
            <Container >
                <ContentGrid container lg={12}>
                    {
                        locations.map(location => (   
                            <ItemGrid item lg={2}>
                            <Typography style={{fontSize: 18, fontWeight: 600, marginBottom: 10}}>{location.area}</Typography>
                            <ul style={{listStyleType:'none', margin:0, padding:0, fontSize: 18}}>
                            {
                                location.areas.map(area => (
                                    <li>{area}</li>
                                ))
                            }
                            </ul>
                            </ItemGrid>
                        ))
                    }
                </ContentGrid>
                <Box>
                    <img width="300" height="170" src="https://servicemarket.imgix.net/dist/images/map.png" alt="" />
                </Box>
            </Container>
        </Component>
    )
}

export default Locations;