//Styled Components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar , StyledTitle , colors , ButtonGroup, ExtraText, TextLink , CopyrightText} from './../components/Styles';

//logo import
import Logo from './../assets/logo.png'

// FORMIK
import {Formik, Form } from 'formik';
import {TextInput} from '../components/FormLibs';
import * as Yup from 'yup'

//Icon
import {FiMail,FiLock} from 'react-icons/fi';

//Loader
import {ThreeDots} from 'react-loader-spinner';


const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color= {colors.theme}size={30}>
                    Member Login
                </StyledTitle>
               <Formik
               initialValues={{
                email: "",
                password: "",
               }}
               validationSchema={
                Yup.object({
                    email: Yup.string().email("Invailed Email Address")
                    .required("Required"),
                    password: Yup.string().min(8, "Password Is Too Short").max(30, "Password is To Long")
                    .required("Required"),
                })
               }
               onSubmit={(vaules, {setSubmitting}) => {
                console.log(vaules);
               }}
               >
                {({isSubmitting}) => (
                    <Form>
                        <TextInput 
                        name="email"
                        type="text"
                        label="Email Address"
                        placeholder="smith@gmail.com"
                        icon={<FiMail />}
                        />

                        <TextInput 
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="**********"
                        icon={<FiLock />}
                        />

                        <ButtonGroup>
                            {!isSubmitting && (<StyledFormButton type="submit">
                                Login
                            </StyledFormButton>
                            )}

                            {isSubmitting && (
                             <ThreeDots 
                             type= "ThreeDots"
                             color={colors.theme}
                             height={49}
                             width={100}
                             />
                            )}

                        </ButtonGroup>
                    </Form>
                )}
               </Formik>
               <ExtraText>
                New Here? <TextLink to="/signup">Signup</TextLink>
               </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All Rights Reserved &copy;2022
            </CopyrightText>
        </div>
    );
};

export default Login;