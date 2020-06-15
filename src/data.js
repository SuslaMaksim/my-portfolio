import React from "react";
import {Home,AssignmentInd,Apps,ContactMail} from "@material-ui/icons";
import socialNetwork from './images/sohialNetvork.jpg';
import pokeDesk from './images/poceDesk.jpg';
import portfolio from './images/portfolioPicture.jpg'


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
]

export let portfolioData = [
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
        id: 2,
        urlApplication: 'https://suslamaksim.github.io/pokemon-desk/',
        picture: pokeDesk,
        projectName: 'Simple React SPA PokeDesk with Material-UI',
        projectDescription: 'This is simple React SPA, created on Material-UI with (redux,react-router-dom,react-redux,redux-thunk technologies)',
        gitHubCode:'https://github.com/SuslaMaksim/pokemon-desk'
    },
    {
        id: 3,
        urlApplication: '/',
        picture: portfolio,
        projectName: 'My Site Portfolio with Material-UI',
        projectDescription: 'This is my Portfolio site, created with React and Material-UI',
        gitHubCode:''
    },
]