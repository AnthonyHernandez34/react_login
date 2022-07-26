//React
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";


//Styled Components
import {StyledFormArea, StyledFormButton,Avatar , StyledTitle , colors , ButtonGroup, ExtraText, TextLink , CopyrightText} from './../components/Styles';

//logo import
import Logo from './../assets/logo.png'

// FORMIK
import {Formik, Form } from 'formik';
import {TextInput} from '../components/FormLibs';
import * as Yup from 'yup'

//Icon
import {FiGlobe,FiLock} from 'react-icons/fi';

//Loader
import {ThreeDots} from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';



const Login = () => {
    const [username, setUserName] = useState("");
    const [email] = useState("");
    const [password, setPassword] = useState(" ");
    const axios = require('axios').default;
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            username:username,
            email:email,
            password:password,
            loggedIn: true,
        }))

    }

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color= {colors.theme}size={30}>
                    Member Login
                </StyledTitle>
               <Formik
               initialValues={{
                username: "",
                password: "",
               }}
               validationSchema={
                Yup.object({
                    email: Yup.string().email("Invailed Email Address")
                    .required("Required"),
                    password: Yup.string().min(3, "Password Is Too Short").max(30, "Password is To Long")
                    .required("Required"),
                })
               }
               onSubmit={(value, {setSubmitting}) => {
                setSubmitting(true)
                console.log(value);
               }}
               >
                {({isSubmitting}) => (
                    <Form onSubmit={(e) => {
                       e.preventDefault()   
                      const url = "https://eleox-interview-api-7n5su.ondigitalocean.app/login"
                      const config = {method: "POST", headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                            body: JSON.stringify({
                                username: username,
                                password: password,
                            })
                         }
                         fetch(url,config).then((response) => response.json())
                         .then((data) => {
                            history.push("/dashboard");  
                           console.log('Success:', data);
                         })
                         .catch((error) => {
                           console.error('Error:', error);
                         });

                        //possible access token

                        const configUrl = {
                            headers: { Authorization: `Bearer ${url}` }
                        };
                        
                        const bodyParameters = {
                           key: "value"
                        };
                        
                        axios.post( 
                          'https://eleox-interview-api-7n5su.ondigitalocean.app/get_token_payloads',
                          bodyParameters,
                          config
                        ).then(console.log).catch(console.log);
                        fetch(configUrl)
                        
                        }}>
                        

                        <TextInput 
                        name="name"
                        type="text"
                        label="Username"
                        placeholder="UserName"
                        value={username}
                        onChange={(event) => setUserName(event.target.value)}
                        icon={<FiGlobe />}
                        />

                        <TextInput 
                        name="password"
                        type="passwrod"
                        label="Password"
                        value={password}
                        placeholder="**********"
                        onChange={(e) => setPassword(e.target.value)}
                        icon={<FiLock />}
                        />

                        {/* input area read the responces and give a fail for non-pass */}

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
               {/* <StyledFormButton>
               <TextLink to="/dashboard">login</TextLink>
               </StyledFormButton> */}
                {/* <br/>
                <br/> */}
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