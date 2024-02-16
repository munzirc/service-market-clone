import { Box , Grid, styled} from "@mui/material";
import Heading from "../headings/Heading";

const Component = styled(Box)`
   padding: 50px 100px 0 100px;
`;

const Image = styled('img')({
   height: 170
});

const FeaturedIn = () =>{
    const images = ['https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0011_Khaleej-Times.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0000_The-National.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0006_Abu-Dhabi-World.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0004_Forbes.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0002_Wamda.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0003_Entrepreneur.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0001_Dubai-Week.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0010_Gulf-Business.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0007_Dubai-Eye.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0009_Arabian-Business.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0005_Emirates-24_7.png?fit=crop&h=150&auto=format,compress',
                  'https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0008_Gulf-News.png?fit=crop&h=150&auto=format,compress'
                 ];

    return(
     <Component>
        <Heading title={'As featured in:'}/>
        <Grid container lg={12}>
          {
            images.map(image => (
                <Grid item lg={2}>
                  <a href="#">
                     <Image src={image} alt="" />
                  </a>
                </Grid>
            ))
          }
        </Grid>
     </Component>
    )
}
export default FeaturedIn;