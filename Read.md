## Site Movement

Start of site Navigation will be "Homepage", While at Homepage you will be give in the option to **login** or **signup**

## Signup

**Onclick** for **Signup** will direct you to Route page Signup onces at here for "Membership signup" you will be giving a form box with the opiton to input text this text boxes will include Fullname, Email Address , DOB , Password and Repeat Password.
once you click the(Signup Button) the data for User will be stored from here you will be Moved to Route Dashboard.

Side note you can click "Already a Member" (Login Button) This will Direct you to the login portion of the webpage.

**Login**
At the \*\*Member Login Screen\*\* you will be given 2 input fields one asking for "username" and another that ask for "password"
onces you click login you will be redirected to the Dashboard.

**Purpose**
Login Page will return access token and errors for not being able to login you will get a (200) if you put in password correct if not error.
As of right now both will redirect you to dashboard inorder to allow you to preview the dashboard.


**Dashboard**
Onces at dashbord you will be shown what user is logged-in and the option to logout.
**Purpose** 
Is to show a user and user avatar from back-end api with the command to logout and return to homepage. 

---



## Project implenting

I will be showing you how to create a project A login that is implementing React Js and Node Js from scratch. Formik, Redux, Styled-components, Yup, Axios and other packages are used and then connected to a node js backend.

During the start of this Project being fairly new to react I had to understand the basic before pushing forward through the project.
This consisted of planning the layout of the project and deveoplment of a storyboard/wireframe/speed-run for timetables.
I started off just using regular React and Node js I manage to get the front-end and backend connected with local api and hardcode local storage this allow me to run two different server "**Local Host 3000**) and "**Local Host 5000**" For the Dev server. This enabled me to be able to render the back-end data to front-end as long as both server were running issue i ran into was that i need to run a URL for the assessment and was having road-blocks doing so.

Instead of staying road-blocked on the first project I started now that I had a better idea of how to run React and use the api URl.
I switch to the project source you see now this allowed for a much cleaner and visualy appealing structuer for the project.
My thought Process for the 2nd verison of the project was to put time-hacks for each scection/component of the project and it goes as follows.

1.  Data Structure for front-end this included (Packages , folders and files) needed for the project

2.  Once Data Structure was achieved start on Homepage this included (Login and Signup Buttons) with fuctionalty to move to different parts of the single page application.

3.  Now that "Hompage" was complete with basic fuctionalty we moved to the styleing for (login page) this consisted of styleing components for wach part of the login page for better visual idea of how to run auth and url api.

4.  We moved to the sign-up page that would allow text-input for data stoarge of each user that register for the website.

5.  Onces we have the back-end set up for login and register and proper API calls and retrive toke for access, we can now move to showing data on the "dashboard'

6.  Dashboard will give the rendered information from the back-end and a logout option for user.

This completes the setup for the web application.

## Side Command

To access Homepage "localhost3000"
To access Dashboard "localhost3000/dashboard"
To access Login "localhost3000/login"
To access Signup "localhost3000/signup"

If you have any further question please feel free to email me at [ants.hernandez@gmail.com]
