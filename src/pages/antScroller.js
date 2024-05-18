import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '100%',
  width:'100%'
};

const AntScroller = () => (
  <Carousel autoplay autoplaySpeed={1500}>
    <div>
      <img src='/S2.jpg' style={contentStyle}/>
    </div>
    <div>
    <img src='/chef.png' style={contentStyle}/>
    </div>
    <div>
    <img src='/ii3.png' style={contentStyle}/>
    </div>
  </Carousel>
);

export default AntScroller;