import { Box, Grid , Typography, styled} from "@mui/material";
import { useContext} from "react";
import Heading from "../headings/Heading";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
   padding: 0 100px;
`;

const Container = styled(Grid)`
    row-gap: 50px;
`;

const ItemGrid = styled(Grid)`
   
`;

const Image = styled('img')({
    width: 360,
    height: 160,
    borderRadius: 4
})

const Title = styled(Typography)`
   font-size: 18px;
`;

const StyledLink = styled(Link)`
   text-decoration: none;
   color: black;
   &:hover{
    text-decoration: underline;
   }
`;


const Cards = ({servicedata}) => {

    const {setIndex,location, index} = useContext(DataContext);

    const handleClick = (i) => {
        setIndex(i)
    }

    return (
        <Component>
            <Heading title={'Related services'}/>
            <Container style={{marginTop: 15}} container lg={14}>
                {
                servicedata.map((arr, i) => (
                    index !== i &&
                    <ItemGrid item lg={3} onClick={()=>handleClick(i)}>
                        <StyledLink to={arr.link}>
                                <Image src={arr.image}/>
                                <Title>{arr.title+location}</Title>
                        </StyledLink>
                    </ItemGrid> 
                ))
            }
            </Container>
        </Component>
    )
}

export default Cards;