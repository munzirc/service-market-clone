
import { Box, Grid, Typography ,styled, Rating} from "@mui/material";
import Heading from "../headings/Heading";

const Component = styled(Box)`
   padding: 50px 100px 0 100px;
`;

const Subtitle = styled('Typography')`
    float: left;
    margin-bottom: 10px;
    font-size: 18px;
    & > a{
      text-decoration: none;
      color: lightgreen;
    }

    & > a:hover{
        text-decoration: underline;
    }

`;

const ContentGrid = styled(Grid)`
   border-radius: 5px;
   margin-top: 15px;
   column-gap: 30px;
`;

const ItemGrid = styled(Grid)`
  text-align:center;
  padding: 10px;
  
`;

const ReviewCard = styled(Box)`
   border: 1px solid #dfdfdf;
   padding: 30px 30px;
   height: 83%;
`;

const Reviews = () => {

        const details = [
            {
                name:'Arsema E',
                review:'I had a helpful and professional team helping me move to my new home. They were patient and eased my anxiety about moving. The team did...',
                date:'08/10/2023',
                rating: 4
            },
            {
                name:'Dima A',
                review:'I’m so happy with the service. The guys are extremely professional and helpful. They helped me with everything I need. They are neat and super...',
                date:'08/10/2023',
                rating: 5
            },
            {
                name:'Farah Y',
                review:'ALT Movers via Service Market (make sure to deal with Marni at SM) - Fantastic team led by Hamza! Reasonable cost, efficiently executed with...',
                date:'08/10/2023',
                rating: 4
            },
            {
                name:'Tracy C',
                review:'What an excellent move we experienced today. Whilst moving is always stressful, from Hamza coming to quote us to the actual move today, the...',
                date:'08/10/2023',
                rating: 4
            },
            {
                name:'Anna A',
                review:'The moving team was excellent. They were extremely helpful, very fast and friendly. My whole experience from the survey right through to t..',
                date:'08/10/2023',
                rating: 5
            },
        ]

        return (
        <Component>
            <Heading title={'Verified customer reviews'}/>
            <Subtitle><a href="#">Read over 15000 verified reviews.</a></Subtitle>
            <ContentGrid container lg={12} md={12}>
                {
                   details.map(detail => (
                    <ItemGrid item lg={2}>
                        <ReviewCard>
                            <Typography style={{textAlign:'left',fontSize: 18, fontWeight:600}}>{detail.name}</Typography>
                            <Typography style={{textAlign:'left',fontSize: 14, marginTop: 10}}>{detail.review}</Typography>
                            <Typography style={{textAlign:'left',fontSize: 14, marginTop: 10}}>{detail.date}</Typography>
                            <Rating style={{float:'left',fontSize: 25, marginTop: 15, color:'tomato'}} name="five-stars" value={detail.rating} readOnly />
                       </ReviewCard>
                    </ItemGrid>
                   )) 
                }
            </ContentGrid>
        </Component>
    )
}

export default Reviews;