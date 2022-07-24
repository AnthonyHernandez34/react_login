//React
import React,{useState} from 'react';

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


const Login = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(" ");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            username:username,
            email:email,
            password: password,
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
                    // name: Yup.string().username("Invailed Username").required("Required"),
                    email: Yup.string().email("Invailed Email Address")
                    .required("Required"),
                    password: Yup.string().min(3, "Password Is Too Short").max(30, "Password is To Long")
                    .required("Required"),
                })
               }
               onSubmit={(vaules, {setSubmitting}) => {
                console.log(vaules);
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
                         
                      const url = "https://eleox-interview-api-7n5su.ondigitalocean.app/login"
                      const config = {method: "POST",headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                            body: JSON.stringify({
                                username: "int@eleox.com",
                                password: "eleox",
                            })
                         }
                        fetch(url,config)
                        
                        }}>
                        <TextInput 
                        name="name"
                        type="text"
                        label="Username"
                        placeholder="UserName"
                        onChange={(e) => setUserName(e.target.vaules)}
                        icon={<FiGlobe />}
                        />

                        <TextInput 
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="**********"
                        //error wont allow input for password
                        // onChange={(e) => setPassword(e.target.vaules)}
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