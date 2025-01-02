import React, { useEffect, useRef } from 'react';
import Slider from '../../components/Slider';
import Choose from '../../components/Choose';
import LimitTutorials from '../../components/LanguageTuo/LimitTutorials';
import CatgSection from '../../components/LanguageTuo/CatgSection';
import Stats from '../../components/LanguageTuo/Stats';



const HomeLayout = () => {

    useEffect(() => {
        document.title = "LinguaConnect | Home";
    }, []);

    const chooseRef = useRef(null);

    const scrollToChoose = () => {
        chooseRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Slider onGetStartedClick={scrollToChoose}></Slider>
            <Stats></Stats>
            <div ref={chooseRef}>
                <CatgSection></CatgSection>
            </div>
            <Choose></Choose>
            <LimitTutorials></LimitTutorials>

        </div>
    );
};

export default HomeLayout;