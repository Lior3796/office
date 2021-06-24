import React,{useState,useContext} from 'react';
import { ImagesProvider,ImagesContext,SetImagesContext } from '../../../Context';
import './Image.css';

function Images() {
    const images = SetImagesContext(); 
    const imagesLenght = images.length;
    const [current,setCurrent] = useState(0);

    function prevButton(){
    setCurrent(current === 0 ? images[imagesLenght] : images[current - 1]);
    console.log(current);
    }

    function nextButton(){
    setCurrent(current === imagesLenght - 1 ? images[0] : images[current + 1]);
    console.log(current)

    }

    return (
        <div className="imagesContainer">  
       <button id="buttonLeft"> <i  className="arrow" className="fas fa-angle-left"></i></button>
        <button id="buttonRight"><i className="arrow" className="fas fa-angle-right"></i></button> 
            {
                images.map((img,index)=>{
                
              return<img key={index} src={img}></img>
               
                })
            }

        </div>
    );

}

export default Images;