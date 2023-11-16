// Import React Libraries
import { Link } from 'react-router-dom';

// Import Datas

// Import Style
import styled from 'styled-components';
import colors from '../../utils/Colors';

// Import Constants
import { responsiveWidth } from '../../utils/Constant';

const StripContainer = styled.div`
    display: flex;
    flex-direction:column;
    background-color:${colors.bluePastel};
    height:300px;
`

const ContentPosition1 = styled.div`
    
    position: relative;
    top: 30%;
    left: 50%;
    text-align:center;
    transform: translate(-50%, -50%);
    background-color: transparent ;

    width:100%;

    border-radius: 15px;
`
const ContentPosition2 = styled.div`
    
    position: relative;
    top: 40%;
    left: 50%;
    text-align:center;
    transform: translate(-50%, -50%);
    background-color: transparent ;

    width:100%;

    border-radius: 15px;
`

const StyledTitle = styled.h1`
    font-size:30px;
    
    font-family:sans-serif;
    font-weight: 900;
    color: black;
    text-transform:uppercase;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 45px;    
    }
`

const StyledText1 = styled.div`
    font-size:25px;
        
    font-family:sans-serif;
    color: white;
    font-weight: 100;

    @media (max-width: ${responsiveWidth}px) {
        font-size: 25px;    
    }
`

const StyledButton = styled.button`
    background: white;
    color: ${colors.bluePastel};
    border-radius:5px;
    border:none;
    padding: 12px 18px;
    cursor:pointer;
    font-weight:600;
    font-size:12px;
    margin-top:20px;
    text-transform: uppercase;
`


function ContactStrip() {

    return (
            <StripContainer>
                <ContentPosition1>
                    <StyledTitle>Do you like my services ?</StyledTitle>
                </ContentPosition1>
                <ContentPosition2>
                    <StyledText1>
                        Let's discuss it, I'd be happy
                        <br></br>
                        to share with you. 
                    </StyledText1>
                    <Link to='/Contact'>
                        <StyledButton>Contact Me</StyledButton>
                    </Link>
                    
                </ContentPosition2>
                    
                    
                
            </StripContainer>
    )
  }
  
  export default ContactStrip;
  