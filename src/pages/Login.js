//React
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

//Axios
import axios from 'axios';


//Styled Components
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar , StyledTitle , colors , ButtonGroup, ExtraText, TextLink , CopyrightText} from './../components/Styles';

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
import { Redirect } from 'react-router-dom';


const Login = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
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
//possible post for user using axios

 // Send a POST request
 const instance = axios.create({
    baseURL: 'https://eleox-interview-api-7n5su.ondigitalocean.app/login',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
    
 
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
                    // name: Yup.string().username("Invailed Username").required("Required"),
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
                        // Get Request 
                        // fetch("https://jsonplaceholder.typicode.com/posts", {
     
                        //     // Adding method type
                        //     method: "POST",
                             
                        //     // Adding body or contents to send
                        //     body: JSON.stringify({
                        //         title: "foo",
                        //         body: "bar",
                        //         userId: 1
                        //     }),
                             
                        //     // Adding headers to the request
                        //     headers: {
                        //         "Content-type": "application/json; charset=UTF-8"
                        //     }
                        // })
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