import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Headings from './Heading'
import './index.css'
import Sdata from './Sdataa'
ReactDOM.render(
  <>
    <h1 className='head'>List of Top 5 Netflix Series</h1>
    <Headings />
    <section className='container'>
      <Card
    
    //using array
        imgsrc={Sdata[0].imgsrc}
        sname={Sdata[0].sname}
        title={Sdata[0].title}
        link={Sdata[0].links} />

      <Card
       className='cars_2'
       imgsrc={Sdata[1].imgsrc}
       sname={Sdata[1].sname}
       title={Sdata[1].title}
       link={Sdata[1].links} />

      <Card
       imgsrc={Sdata[2].imgsrc}
       sname={Sdata[2].sname}
       title={Sdata[2].title}
       link={Sdata[2].links} />

      <Card
      
       imgsrc={Sdata[3].imgsrc}
       sname={Sdata[3].sname}
       title={Sdata[3].title}
       link={Sdata[3].links} />
       <Card
       imgsrc={Sdata[4].imgsrc}
       sname={Sdata[4].sname}
       title={Sdata[4].title}
       link={Sdata[4].links} />
    </section>
  </>,
  document.getElementById("root")
)