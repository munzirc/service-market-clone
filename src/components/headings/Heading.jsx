import { Box,Typography, styled } from "@mui/material";

const Title = styled(Typography)`
font-weight: 600;
text-align: left;
padding: 10px 0;
`;

const TitleHolder = styled(Box)`
 display: flex;
 gap: 10px;
 align-items:center;
`;


const Dash = styled('span')({
    display: 'inline-block',
    width: 60,
    height: 3,
    backgroundColor: '#01788e',
  });

const Heading = ({title}) => {
    return(
        <TitleHolder><Title variant="h5">{title}</Title><Dash /></TitleHolder>
    )
}

export default Heading;