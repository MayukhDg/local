import React from 'react';
import Hero from '@/components/Hero';
import P1 from '@/components/P1';
import P2 from '@/components/P2';
import Education from '@/components/Education';
import Partition from '@/components/Partition';
import Message from '@/components/Message';
import Discover from '@/components/Discover';
import Insights from '@/components/Insights';
import Testimonials from '@/components/Testimonials';

const page = () => {
  return (
    <React.Fragment>
    <Hero/>
    <P1/>
    <P2/>
    <Education/>
    <Partition/>
    <Message/>
    <Discover/>
    <Insights/>
    <Testimonials/>
    </React.Fragment>
  )
}

export default page