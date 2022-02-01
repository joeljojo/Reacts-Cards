import React from 'react';
//import Image from '../Images/image-qr-code.png';
import Photo from './Photo';
import Tex from './Text';
import '../index.css';
//import Second from './Card2';
import Card2 from './Card2';
export default function Cards() {
    return (
        <div className='container'>
        <div className='card'>
        <div className='content'>
        <Photo/>
        <Tex/>
        </div>
        
        </div>
        <Card2/>
        </div>

        

        
    );
}