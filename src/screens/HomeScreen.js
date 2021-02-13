import React from 'react'
import Banner from '../Banner'

import './HomeScreen.css'
import Navbar from '../Navbar'
import requests from '../Requests'
import Row from '../Row'

function HomeScreen() {
    return (
        <div className = 'homescreen'>
                {/* <h1> I am Homescreen!!</h1> */}
                {/* Navbar */}
                    <Navbar></Navbar>
                    {/* Banner */}
                        <Banner></Banner>
                {/* Row */}
                <Row
                title = 'NETFLIX ORIGINALS'
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
                ></Row>
                <Row
                title = 'Trending Now'
                fetchUrl = {requests.fetchTrending}
                ></Row>
                <Row
                title = 'Top Rates'
                fetchUrl = {requests.fetchTopRated}
                ></Row>
                <Row
                title = 'Action Movies'
                fetchUrl = {requests.fetchActionMovies}
                ></Row>
                <Row
                title = 'Comedy Movies'
                fetchUrl = {requests.fetchComedyMovies}
                ></Row>
                <Row
                title = 'Horror Movies'
                fetchUrl = {requests.fetchHorrorMovies}
                ></Row>
                <Row
                title = 'Romance Movies'
                fetchUrl = {requests.fetchRomanceMovies}
                ></Row>
                <Row
                title = 'Documantries'
                fetchUrl = {requests.fetchDocumentaries}
                ></Row>
                 
        </div>
    )
}

export default HomeScreen
