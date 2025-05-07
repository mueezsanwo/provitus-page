import React from 'react';
import './body.css';
import icon from '../images/Illustration.png'
import amazon from '../images/amazon.png'
import dribble from '../images/dribble.png'
import hub from '../images/hubspot.png'
import nextflix from '../images/netflix.png'
import notion from '../images/notion.png'
import zoom from '../images/zoom.png'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import card5 from '../images/card5.png'
import card6 from '../images/card6.png'
import arrow1 from '../images/arrow1.png'
import arrow2 from '../images/arrow2.png'
import illustration2 from '../images/Illustration2.png'
import arrow3 from '../images/arrow3.png'
import plus from '../images/Plus icon.png'
import minus from '../images/minus.png'
import picture from '../images/Picture.png'
import picture2 from '../images/Picture2.png'
import picture3 from '../images/Picture3.png'
import picture4 from '../images/Picture4.png'
import picture5 from '../images/Picture5.png'
import picture6 from '../images/Picture6.png'
import social from '../images/social.png'
import stars from '../Stars.png'
import arrowleft from '../Arrow left.png'
import arrowright from '../Arrow right.png'


// Define card data
const cardData = [
    {
      title: "Search engine optimization",
      image: card1,
      buttonIcon: arrow2,
      className: "seo-card",
    },
    {
      title: "Pay-per-click advertising",
      image: card2,
      buttonIcon: arrow2,
      className: "ppc-card",
    },
    {
      title: "Social Media Marketing",
      image: card3,
      buttonIcon: arrow1,
      className: "smm-card",
    },
    {
      title: "Email Marketing",
      image: card4,
      buttonIcon: arrow2,
      className: "em-card",
    },
    {
      title: "Content Creation",
      image: card5,
      buttonIcon: arrow2,
      className: "cc-card",
    },
    {
      title: "Analytics and Tracking",
      image: card6,
      buttonIcon: arrow2,
      className: "at-card",
    },
  ];

const Body = () => {
  return (
    <section className="body-section">
      {/* Hero Section */}
      <div className="body-content">
        <div className="text-content">
          <h1>Navigating the digital landscape for success</h1>
          <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className="body-button">Book a consultation</button>
        </div>

        <div className="image-content">
          <img src={icon} alt="Illustration" />
        </div>
      </div>

      {/* Streaming App Logos Section */}
      <div class="streaming-apps">
  <div class="streaming-list">
    <img src={amazon} alt="amazon" />
    <img src={dribble} alt="dribble" />
    <img src={hub} alt="hubspot" />
    <img src={nextflix} alt="netflix" />
    <img src={notion} alt="notion" />
    <img src={zoom} alt="zoom" />
  </div>
</div>


      <div className="info-row">
      <h1 className="info-header">Services</h1>
        <p className="info-text">
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Card Section */}
      <div className="card-grid-container">
  <div className="card-grid">
    {cardData.map((card, index) => (
      <div key={index} className={`card ${card.className}`}>
        <div className="card-text">
          <h3>{card.title}</h3>
          <button className="card-button">
            <img
              src={card.buttonIcon}
              alt={`${card.title} icon`}
              className="button-icon"
            />
            Learn more
          </button>
        </div>
        <div className="card-image">
          <img src={card.image} alt={`Card ${index + 1}`} />
        </div>
      </div>
    ))}
  </div>
</div>

<div className="card2">
  <div className="card-text">
    <h1>Let’s make things happen</h1>
    <p>
      Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
    </p>
    <button className="body-button">Get your free proposal</button>
  </div>

  <div className="image-content">
    <img src={illustration2} alt="Illustration" />
  </div>
</div>


      <div className="info-row">
      <h2 className="info-header"> Case Studies</h2>
        <p className="info-text">
        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      {/* New Card with Three Text Sections */}
<div className="card-three-columns">
  <div className="card-section">
    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
    <button>learn more <img src={arrow3} alt='logo' className='logo' /> </button>
  </div>
  <div className="card-section">
    <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
    Learn more</p>
    <button>learn more <img src={arrow3} alt='logo' className='logo2' /> </button>
  </div>
  <div className="card-section">
    <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
    <button>learn more <img src={arrow3} alt='logo' className='logo' /> </button>
  </div>
</div>

<div className="info-row">
      <h2 className="info-header"> Our Working Process</h2>
        <p className="info-text steps"> 
        Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Process Steps Section */}
<div className="process-steps">
  {[
    { number: '01', process: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
    { number: '02', process:  'Research and Strategy Development',  },
    { number: '03', process: 'Implementation',  },
    { number: '04', process: 'Monitoring and Optimization', },
    { number: '05', process: 'Reporting and Communication', },
    { number: '06', process: 'Continual Improvement', },
  ].map((step, index) => (
    <div key={index} className={`process-card ${index === 0 ? 'expanded' : ''}`}>
      <div className="process-header">
        <div className="process-number">{step.number}</div>
        <div className="process-text">{step.process}</div>
        <div className="process-toggle">
        <img src={index === 0 ? minus : plus} alt="Toggle icon" />
        </div>
      </div>
      
      {index === 0 && (
        <div className="process-details">
          <hr />
          <p>{step.description}</p>
        </div>
      )}
    </div>
  ))}
</div>

<div className="info-row">
      <h2 className="info-header">Team</h2>
        <p className="info-text steps2">
        Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      {/* Team Members Section */}

      <div className="team-wrapper">
  <div className="team-members">
    {[ 
      {
        name: 'John Smith',
        image: picture,
        role: 'CEO and Founder',
        experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
      },
      {
        name: 'Jane Doe',
        image: picture2,
        role: 'Director of Operations',
        experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
      },
      {
        name: 'Micheal Brown',
        image: picture3,
        role: 'Senior SEO Specialist',
        experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
      },
      {
        name: 'Emily Johnson',
        image: picture4,
        role: 'PPC Manager',
        experience: 'Emily JohnsonPPC Manager 3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
      },
      {
        name: 'Brian Williams',
        image: picture5,
        role: 'Social Media Specialist',
        experience: 'Brian Williams Social Media Specialist 4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
      },
      {
        name: 'Sarah Kim',
        image: picture6,
        role: 'Content Creator',
        experience: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
      }
    ].map((member, index) => (
      <div key={index} className="team-card">
        <div className="team-card-header">
          <img src={member.image} alt={member.name} className="team-member-image" />
          <div className="team-member-info">
            <div className="team-member-name">{member.name}</div>
            <div className="team-member-role">{member.role}</div>
          </div>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-logo">
            <img src={social} alt="LinkedIn" />
          </a>
        </div>
        <hr />
        <p className="team-member-experience">{member.experience}</p>
      </div>
    ))}
  </div>
  
  <div className="see-all-team">
    <button>See All Team</button>
  </div>
</div>


<div className="info-row">
      <h2 className="info-header">Testimonials</h2>
        <p className="info-text">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      {/* Testimonial Card */}
<div className="testimonial-card">
  <div className="testimonial-box-container">
    {/* First Testimonial (half visible) */}
    <div className="testimonial-box first">
      <p className="testimonial-text">
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
      </p>
    </div>

    {/* Second Testimonial (fully visible) */}
    <div className='info'>
    <div className=" infobox">
      <p className="testimonial-text">
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
      </p>
    </div>
    <div className="testimonial-author">
    <p className='name'>John Smith</p>
    <p> Marketing Director at XYZ Corp</p>
  </div>
  </div>

    {/* Third Testimonial (half visible) */}
    <div className="info2">
  <div className="infobox last">
    <p className="testimonial-text">
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads..."
    </p>
  </div>

  <div className="testimonial-author-wrapper">
    <div className="testimonial-author2">
      <span className='name'>John Smith<br /></span>
      Marketing Director at XYZ Corp
    </div>
  </div>
</div>

  </div>

  {/* Arrow Navigation */}
  <div className="testimonial-arrow">
    <img src={arrowleft} alt='arrow' className='arrow1' />
    <img src={stars} alt='arrow' className='stars' />
    <img src={arrowright} alt='arrow' className='arrow2' />
  </div>
</div>


<div className="info-row">
      <h2 className="info-header">Contact Us</h2>
        <p className="info-text steps3">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
    </section>
  );
};

export default Body;
