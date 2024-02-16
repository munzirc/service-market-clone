import SearchIcon from '@material-ui/icons/Search';
import { Call, ChatBubble, Person, Star, VerifiedUser } from "@material-ui/icons";
import styled from '@emotion/styled';
import "./home.scss";


const SearchButton = styled(SearchIcon)`
  font-size: 28px;
`;

export default function Featured() {
  return (
    <div className="featured">
        <div className="container">
            <h1 className="heading1">Sit back, we'll take it from here</h1>
            <h2 className="heading2">Book or get free quotes for over 25 home services from trusted companies in Dubai</h2>
            
            <div className="wrapper">
              <select>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Riyadh</option>
                  <option>Qatar</option>
                  <option>Muscat</option>
                </select>
              <input type="text" placeholder="Start typing to find a service" />
              <div class="search__icon"><SearchButton/></div>
            </div>
        </div>

        <div className="lowerContainer">
          <div class="tags"><Person/> 150,000+ </div>
          <div class="tags"><ChatBubble/> Over 15,000 reviews </div>
          <div class="tags"><Star/> Rated 4.8 out of 5 </div>
          <div class="tags"><VerifiedUser/> Trusted service professionals </div>
          <div class="tags"><Call/> Live customer support </div>
        </div>
        
    </div>
  );
}
