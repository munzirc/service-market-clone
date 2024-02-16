import { Box , Grid, Typography, styled} from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Component = styled(Box)`
   padding: 50px 100px 50px 100px;
   background-color: #054351; 
`;

const ContentGrid = styled(Grid)`
`;

const ItemGrid = styled(Grid)`
   text-align: left;
`;

const Heading = styled(Typography)`
   font-size: 22px;
   font-weight: 600;
   margin-bottom: 24px;
   color:#FFF;
`;

const FooterLink = styled('a')({
    display:'block',
    fontSize: 20,
    textDecoration: 'none',
    marginBottom: 16,
    color:'#FFF',
    '&:hover':{
        textDecoration:'underline'
    }
})

const Contact = styled(Box)`
   display: flex;
   margin-bottom: 10px;
`;

const ContactDetails = styled(Typography)`
    font-size: 20px;
    color:#fff;
`;

const SocialIcons = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Icons = styled('a')({

});

const Footer = ()=> {
   return(
     <Component>
       <ContentGrid container lg={12}>
          <ItemGrid item lg={3}>
              <Heading>Resources</Heading>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>The Home Project Blog</FooterLink>
              <FooterLink>Write a review</FooterLink>
              <FooterLink>Our service guarantee</FooterLink>
              <FooterLink>Service complaints</FooterLink>
          </ItemGrid>

          <ItemGrid item lg={3}>
             <Heading>About us</Heading>
              <FooterLink>About us</FooterLink>
              <FooterLink>Payment and refund policy</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Contact us</FooterLink>
          </ItemGrid>

          <ItemGrid item lg={3}>
             <Heading>Partners</Heading>
              <FooterLink>Become a partner</FooterLink>
          </ItemGrid>

          <ItemGrid item lg={3}>
             <Heading>Get in touch</Heading>
             <Contact><ContactDetails>Address:</ContactDetails><ContactDetails style={{marginLeft: 20}}>1403, Fortune Executive Tower, Cluster T, JLT, Dubai, UAE.</ContactDetails></Contact>
             <Contact><ContactDetails>Phone:</ContactDetails><ContactDetails style={{marginLeft: 36}}>+971 4 506 1500</ContactDetails></Contact>
             <Contact><ContactDetails>Fax:</ContactDetails><ContactDetails style={{marginLeft: 60}}>+971 4 422 9823</ContactDetails></Contact>
             <Contact><ContactDetails>Email:</ContactDetails><ContactDetails style={{marginLeft: 42}}><FooterLink href="mailto:support@servicemarket.com">support@servicemarket.com</FooterLink></ContactDetails></Contact>

            <Box style={{marginTop:20}}>
               <Heading>Follow Us</Heading>
               <SocialIcons>
                  <Icons href=""><FacebookRoundedIcon style={{color:"#fff", fontSize: 42.66}}/></Icons>
                  <Icons href=""><InstagramIcon style={{color:"#fff", fontSize: 42.66}}/></Icons>
                  <Icons href=""><TwitterIcon style={{color:"#fff", fontSize: 42.66}}/></Icons>
                  <Icons href=""><LinkedInIcon style={{color:"#fff",fontSize: 42.66}}/></Icons>
                  <Icons href=""><GoogleIcon style={{color:"#fff", fontSize: 42.66}}/></Icons>
                  <Icons href=""><WhatsAppIcon style={{color:"#fff", fontSize: 42.66}}/></Icons>
               </SocialIcons>
            </Box>
          </ItemGrid>

       </ContentGrid>
     </Component>
   )
}

export default Footer;