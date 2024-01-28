import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className='h-fit bg-[#FFF] px-3 flex flex-col gap-2 py-5' >
      <p className='text-[#FE8D66] montserrat font-bold ' >TESTIMONIALS</p>
      <h3 className=' text-4xl text-[#1B1A1A] font-bold montserrat' >What people who have <br/> taken our tour are saying</h3>
      <div className='flex flex-wrap gap-4 pt-6 justify-center'>
       <TestimonialCard image={"/testimonials/user1.jpg"} name={"Mayukh Dasgupta"} logo={"/ABNB_logo.png"} copy={"Shrijit took us on a whirlwind tour across Kolkata, introducing us to the many faces of the city. He brought us through the peaceful suburbs and bustling bazaars, the cafes and bookshops that gave birth to many student movements, and the buildings and neighborhoods that revealed the city's sordid colonial past. He structured the tour as a film, and I could tell that he put an incredible amount of thought into each moment, culminating in a sunset ferry ride under the Howrah Bridge, from which we could put our day's experiences in Kolkata in perspective."}/>
       <TestimonialCard image={"/testimonials/user2.jpg"} name={"OMKAR B"} logo={"/TA_logo.png"} copy={"The time spent with Shrijit is memorable and the best thing that happened on this journey. To see Kolkata through the eyes of shrijit and engage in a conversation with him is intriguing, he knows the city from native and cosmopolitan lenses, he discusses history and geography with you. The random Hindi words he uses are cute in his accent while he talks in English. Shrijit is comforting and if you're really curious about anything, then just ask him and he would love to talk about it. The more you're keen about this city, the more he will talk to you. Shrijit is a wonderful guide and he gets along very well. Most importantly, he is a concerned and passionate human being, he doesn't show you the city simply to please you as a tourist, he rejoices in it's beauty and his heart aches when he sees things that hurt. He tries his best to give you an authentic picture of the place. If you're keen to know Kolkata, he is the person to show it to you with warmth and passion. I loved every moment I spent with him in this city."}/>
        <TestimonialCard image={"/testimonials/user3.jpg"} name={"Yeshi C"} logo={"/TA_logo.png"} copy={"I took this tour with my friends and we had a fantastic time. Srijit is fun, thoughtful, thoroughly professional and a great storyteller. Unlike most city tours that take the cookie cutter approach and cover just the historic landmarks in a rush, this tour lets you soak into the rich history and vibrant culture of Kolkata.You get to experience the city in its present form and also travel back in time to the colonial era. A really engaging tour that will stay with you forever. It was the highlight of my trip to Kolkata. Highly recommended."} />
         <TestimonialCard image={"/testimonials/user4.jpg"} name={"Abovetheclouds"} logo={"/TA_logo.png"} copy={"One of the best tours I have done. I did the Kolkata - A Sea of Faces and A Thousand Places (local guide) Immersive Small group Tour. However, it was just me so had a private tour. Guide was brilliant. Great way to have an 'alternate tour of Kolkata'. Local life. Learnt and saw so much."} />
      </div>
    </section>
  )
}

export default Testimonials