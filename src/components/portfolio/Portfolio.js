import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'
import IMG5 from '../../assets/img5.jpg'
import IMG6 from '../../assets/img6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Some title here",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    image: IMG2,
    title: "Some title here",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "Some title here",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 4,
    image: IMG4,
    title: "Some title here",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "Some title here",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 6,
    image: IMG6,
    title: "Some title here",
    github: "https://github.com",
    demo: "https://github.com"
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-img'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio-item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={github} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }

 


      </div>
    </section>
  )
}

export default Portfolio