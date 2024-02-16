import { Box, Link, Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './slider.css';
import Heading from "../headings/Heading";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Image = styled('img')({
    width: '100%',
    height: '80%',
    borderRadius: 5,
  });

  const Component = styled(Box)`
     position: relative;
     padding: 50px 100px 0 100px;
  `;

  const Slide = styled(Box)`
     text-align: left;
     width: 350px;
     height: 230px;
  `;

  const Slider = ({Services, title}) => {
    
    return (
        <Component>
            <Heading title={title}/>
            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                renderButtonGroupOutside={true}
                centerMode={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px slider-item"
                containerClass="carousel-container"
                >
                {
                    Services.map(service => (
                        <Slide>
                            <a href="#" style={{textDecoration:'none'}}>
                                <Image src={service.image} alt= "product"/>
                                <Typography style={{color:'black',fontSize: 18}}>{service.title}</Typography>
                            </a>
                        </Slide>
                    ))
                }
                </Carousel>
            </Component>
    )
  }

  export default Slider;