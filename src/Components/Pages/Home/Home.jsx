import React,{useState,useContext} from 'react';
import Images from '../../Features/Images/Images';
import SpecialButton from '../../Features/SpecialButton/SpecialButton';
import { ImagesProvider,ImagesContext,SetImagesContext } from '../../../Context';
function Home() {
  const imagesArray = SetImagesContext();
  console.log(...imagesArray);
    return (
        <>
        <ImagesProvider value={imagesArray}>
        <h1>Hello employees</h1>
        
        <Images />
        </ImagesProvider>
        </>
    )
}

export default Home;