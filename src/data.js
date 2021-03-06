import React from "react";
import {Home,AssignmentInd,Apps,ContactMail} from "@material-ui/icons";
import socialNetwork from './images/sohialNetvork.jpg';
import pokeDesk from './images/poceDesk.jpg';
import portfolio from './images/portfolioPicture.jpg';
import testTask from './images/taskTest.jpg';
import chat from './images/chat.jpg';
import musicTask from './images/music-task';
import weatherTask  from './images/weather-tasck';


export let items = [
    {
        listText: 'Home',
        listIcon: <Home/>,
        listLink: '/'
    },
    {
        listText: 'Resume',
        listIcon: <AssignmentInd/>,
        listLink: '/resume'
    },
    {
        listText: 'Portfolio',
        listIcon: <Apps/>,
        listLink: '/portfolio'
    },
    {
        listText: 'Contacts',
        listIcon: <ContactMail/>,
        listLink: '/contacts'
    },
]

export let resumeData = [
    {
        id: 1,
        year: 2018,
        language: 'HTML, CSS',
        skills: 'HTML, CSS, FlexBox, Sass',
        bodyText: 'Creating simple site'

    },
    {
        id: 2,
        year: 2019,
        language: 'JavaScript (ES5,ES6)',
        skills: 'Prototype, Async/await, Promise ,Classes, Axios ',
        bodyText: 'Creating simple web application, writing clean and understandable code'

    },
    {
        id: 3,
        year: '2019-2020',
        language: 'React & Redux & TypeScript',
        skills: 'Redux,React-router-dom,React-redux,Redux-form,Redux-thunk',
        bodyText: 'Creating  React SPA with server requests '
    },
    {
        id: 4,
        year: '2020',
        language: 'Material-UI',
        skills: 'Material-UI',
        bodyText: 'Creating some response React SPA '
    },
      {
        id: 5,
        year: '2020',
        language: 'Node  Express & Socket.io Socket.io-client',
        skills: 'Express & Socket.io Socket.io-client',
        bodyText: 'Creating some Simple Full-stack application with Node.js and React,use Socket.io and deployed it '
    },
]

export let portfolioData = [
    {
        id: 7,
        urlApplication: 'https://suslamaksim.github.io/weather/',
        picture: weatherTask,
        projectName: 'weather in your city ',
        projectDescription: 'I created the simple  application with React (redux,react-redux,redux-form,redux-thunk,materialUA) ',
        gitHubCode:'https://github.com/SuslaMaksim/weather'
    },
   {
        id: 6,
        urlApplication: 'https://suslamaksim.github.io/music-test/',
        picture: musicTask,
        projectName: 'Get Music on API',
        projectDescription: 'I created the simple  application with React (redux,react-redux,redux-form,redux-thunk,semanticUA) ',
        gitHubCode:'https://github.com/SuslaMaksim/music-test'
    },
   {
        id: 5,
        urlApplication: 'https://suslamaksim.github.io/chat-socket-io/',
        picture: chat,
        projectName: 'Chat',
        projectDescription: 'I created the simple Full-stack application with React and Node.js, with using socket.io ',
        gitHubCode:'https://github.com/SuslaMaksim/chat-socket-io'
    },
    {
        id: 2,
        urlApplication: 'https://suslamaksim.github.io/TestTask/',
        picture: testTask,
        projectName: 'Response React SPA  ',
        projectDescription: 'Response React Application created with  (redux,react-redux,redux-form,redux-thunk,materialUA) and ' +
            'with requests on technology axios ',
        gitHubCode:'https://github.com/SuslaMaksim/TestTask'
    },
    {
        id: 4,
        urlApplication: 'https://suslamaksim.github.io/my-portfolio/',
        picture: portfolio,
        projectName: 'My Site Portfolio with Material-UI',
        projectDescription: 'This is my Portfolio site, created with React and Material-UI',
        gitHubCode:'https://github.com/SuslaMaksim/my-portfolio'
    },
    {
        id: 1,
        urlApplication: 'https://suslamaksim.github.io/Social-network/',
        picture: socialNetwork,
        projectName: 'Social Network React SPA ',
        projectDescription: 'My React Application created with TypeScript, (redux,react-router-dom,react-redux,redux-form,redux-thunk) and ' +
            'with (get,put,post,delete requests on technology axios) ',
        gitHubCode:'https://github.com/SuslaMaksim/Social-network'
    },
    {
        id: 3,
        urlApplication: 'https://suslamaksim.github.io/pokemon-desk/',
        picture: pokeDesk,
        projectName: 'Simple React SPA PokeDesk with Material-UI',
        projectDescription: 'This is simple React SPA, created on Material-UI with (redux,react-router-dom,react-redux,redux-thunk technologies)',
        gitHubCode:'https://github.com/SuslaMaksim/pokemon-desk'
    },

  
]