import React from 'react'

import { SocialMedia} from '../components'

const appVideo =  (Component, classNames) => function HOC(){
    return (
        <div  className={`app__container ${classNames}`}>
          
          <div className="app__wrapper app__flex">
            <SocialMedia />
            <video className='app__wrapper app__flex app__container_video' src={''} autoPlay loop muted> 
            <Component />
            </video>
          </div>
        
        </div>
      );
    };
  

export default appVideo