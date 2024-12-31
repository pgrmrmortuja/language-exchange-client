import React, { useEffect } from 'react';
import Slider from '../../components/Slider';
import Choose from '../../components/Choose';
import LimitTutorials from '../../components/LanguageTuo/LimitTutorials';
import CatgSection from '../../components/LanguageTuo/CatgSection';
import Stats from '../../components/LanguageTuo/Stats';



const HomeLayout = () => {

    useEffect(() => {
        document.title = "LinguaConnect | Home";
    }, []);

    return (
        <div>
            <Slider></Slider>
            <Choose></Choose>
            <Stats></Stats>
            <CatgSection></CatgSection>
            <LimitTutorials></LimitTutorials>

        </div>
    );
};

export default HomeLayout;