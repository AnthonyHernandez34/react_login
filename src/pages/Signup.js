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
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

//Loader
import {ThreeDots} from 'react-loader-spinner';
import {useHistory} from "react-router-dom";


const Signup = () => {
    const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>
                    Member Signup
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirth: "",
                        name: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invailed Email Address")
                                .required("Required"),
                            password: Yup.string().min(4, "Password Is Too Short").max(30, "Password is To Long")
                                .required("Required"),
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.string().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords Must Match")
                        })
                    }
                    onSubmit={(value, {setSubmitting}) => {
                        history.push("/dashboard");
                        console.log(value);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Username"
                                placeholder="SmithJr"
                                icon={<FiUser/>}
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="smith@gmail.com"
                                icon={<FiMail/>}
                            />
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date Of Birth"
                                icon={<FiCalendar/>}
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="**********"
                                icon={<FiLock/>}
                            />
                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="**********"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">
                                        Signup
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
                    Already A Member? <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All Rights Reserved &copy;2022
            </CopyrightText>
        </div>
    );
};

export default Signup;