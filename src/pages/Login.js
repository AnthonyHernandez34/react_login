//React
import React, {useState} from 'react';
import {useHistory} from "react-router-dom";


//Styled Components
import {
    StyledFormArea,
    StyledFormButton,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles';

//logo import
import Logo from './../assets/logo.png'

// FORMIK
import {Formik, Form} from 'formik';
import {TextInput} from '../components/FormLibs';
import * as Yup from 'yup'

//Icon
import {FiGlobe, FiLock} from 'react-icons/fi';

//Loader
import {ThreeDots} from 'react-loader-spinner';

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState(" ");
    const history = useHistory();

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>
                    Member Login
                </StyledTitle>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalided Email Address")
                                .required("Required"),
                            password: Yup.string().min(3, "Password Is Too Short").max(30, "Password is To Long")
                                .required("Required"),
                        })
                    }
                    onSubmit={(value, {setSubmitting}) => {
                        history.push("/dashboard");
                        setSubmitting(true)
                        console.log(value);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            const url = "https://eleox-interview-api-7n5su.ondigitalocean.app/login"
                            const config = {
                                method: "POST", headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                },
                                body: JSON.stringify({
                                    username: username,
                                    password: password,
                                })
                            }
                            fetch(url, config).then((response) => response.json())
                                .then((data) => {
                                    history.push("/dashboard");
                                    console.log('Success:', data);
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                        }}>


                            <TextInput
                                name="name"
                                type="text"
                                label="Username"
                                placeholder="UserName"
                                value={username}
                                onChange={(event) => setUserName(event.target.value)}
                                icon={<FiGlobe/>}
                            />

                            <TextInput
                                name="password"
                                type="passwrod"
                                label="Password"
                                value={password}
                                placeholder="**********"
                                onChange={(e) => setPassword(e.target.value)}
                                icon={<FiLock/>}
                            />

                            {/* input area read the responces and give a fail for non-pass */}

                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">
                                        Login
                                    </StyledFormButton>
                                )}

                                {isSubmitting && (
                                    <ThreeDots
                                        type="ThreeDots"
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