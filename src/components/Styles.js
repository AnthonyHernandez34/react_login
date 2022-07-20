import styled from 'styled-components';

//Styled Background
import background from './../assets/bg.png'


export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}


//styled component
export const StyledContainer = styled.div`
margin: 0;
min-height: 100vh;
display: flex;
justify-content: center;
align-items:center;
background: liner-gradient(0deg, rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0.6)), url(${background});
background-size:cover;
background-attachment:fixed;
`;