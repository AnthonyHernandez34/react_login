//Styled Components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar , StyledTitle , colors} from './../components/Styles';

//logo import
import Logo from './../assets/logo.png'
const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color= {colors.theme}size={30}>
                    Member Login
                </StyledTitle>

            </StyledFormArea>
        </div>
    )
}

export default Login