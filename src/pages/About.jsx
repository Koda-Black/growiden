import React from 'react'
import aboutImg from '../assets/images/aboutUs.png'

export const About = () => {
  return (
    <section className='aboutUs'>
        <h2 className='section-title text-center'>About Us</h2>
        <p className='aboutUs-text my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed odit molestias mollitia vero dicta aut sapiente ipsa voluptatem laborum eaque, expedita tempore necessitatibus consequuntur, sint aspernatur exercitationem eum totam.</p>
        <img src={aboutImg} alt="About Img" />
    </section>
  )
}
