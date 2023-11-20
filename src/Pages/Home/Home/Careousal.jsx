import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import image1 from '../../../assets/caresoul/1.jpg'
// import image2 from '../../../assets/caresoul/2.jpg'
// import image3 from '../../../assets/caresoul/3.jpg'
// import image4 from '../../../assets/caresoul/4.jpg'
import image1 from '../../../assets/Sports/InShot_20230822_132629365.jpg'
import image2 from '../../../assets/Sports/InShot_20230822_132648782.jpg'
import image3 from '../../../assets/Sports/InShot_20230822_132707524.jpg'
import image4 from '../../../assets/Sports/InShot_20230822_132733974.jpg'
import image5 from '../../../assets/Sports/InShot_20230822_132756961.jpg'
 



const Careousal = () => {
    return (
        <div>
            
            <Carousel>
                <div  >
                    <img src={image1}   />
                  
                </div>
                <div  >
                    <img src={image2} />
                    
                </div>
                <div>
                    <img src={image3} />
                   
                </div>
                <div>
                    <img src={image4} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={image5} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                
            </Carousel>

        </div>
    );
};

export default Careousal;