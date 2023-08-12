import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/caresoul/1.jpg'
import image2 from '../../../assets/caresoul/2.jpg'
import image3 from '../../../assets/caresoul/3.jpg'
import image4 from '../../../assets/caresoul/4.jpg'



const Careousal = () => {
    return (
        <div>
            
            <Carousel>
                <div>
                    <img src={image1} className='  w-full ' />
                  
                </div>
                <div>
                    <img src={image2} />
                    
                </div>
                <div>
                    <img src={image3} />
                   
                </div>
                <div>
                    <img src={image4} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                
            </Carousel>

        </div>
    );
};

export default Careousal;