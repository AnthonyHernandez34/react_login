//CSS and Style
import "./../components/Card.css"
import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors } from "../components/Styles";
//logo
import Logo from "./../assets/logo.png"
import Headshot from "./../assets/headshot.png"

//auth & logout didn't use but setup for it is in files
import { connect } from "react-redux";

const Dashboard = () => {
    return (
        <div className="card-container">
            <div className="image-container">
            <img src={Headshot} alt=''/>
            </div>
            <div style={{
                position:"absolute",
                top:0,
                left:0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar image={Logo} />
            </div>
            <StyledFormArea bg={colors.dark1}>
            <StyledTitle size={35}>
                    Welcome Anthony Hernandez
                </StyledTitle>
                <ButtonGroup><StyledButton to="/">Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>   
    )
};

export default Dashboard;