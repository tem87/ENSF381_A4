/*
=========================================================
Name        : Homepage.js
Assignment  : 4
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 03/25/2024
Description : homepage implementation 
=========================================================
*/
import React from 'react';
import Header from './Header';
import HomeMainSection from './HomeMainSection';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Header />
            <HomeMainSection/>
            <Footer/>
        </div>
    );
};

export default Homepage;