import React from 'react';
import { BsJournalPlus } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/posts/chinmay-chougule-478909213_connections-internship-cybersecurity-activity-7040353849861103616-inKv?utm_source=share&utm_medium=member_desktop',
      name: 'Hacker Bro Technologies',
      role: 'Cyber Security Analyst Intern (03-23 - Ongoing)',
      test: 'As a Cyber Security Analyst Intern, my current role is to learn, analyze, monitor, perform vulnerability/risk assessments, and report on the activities that have been assigned and requested for me. Hacker Bro Technologies is assisting me in gaining practical understanding of how to identify and patch the issues discovered.',
    },
    {
      id: 2,
      link: 'https://www.cloudskillsboost.google/public_profiles/c05cbefd-43fd-4f2a-be0d-7f8f81574350',
      name: 'Google Cloud Ready Facilitator',
      role: 'Facilitator (04-22 - 07-22)',
      test: "Facilitator in Google Cloud Ready Facilitator 2022. Earned various skill badges in GCP and completed tracks. Helped a lot people around to achieve the same.",
    },
    {
      id: 3,
      link: 'https://www.credly.com/badges/45e2125b-34a2-4631-add2-e271524dad96',
      name: 'Microsoft Certified: Azure Fundamentals',
      role: 'Externship (06-22 - 07-22)',
      test: 'Cleared the Microsoft Azure AZ-900 Certification. This certification gives the fundamental aspects and benefits of Microsoft’s Cloud Services. Learnt how subscriptions work, what support plans are available, the difference between Infrastructure as a Service, Platform as a Service and Software as a Service.',
    },
    {
      id: 4,
      link: 'https://drive.google.com/file/d/1jgu0Ks73MCugqjy4a_2grcW63I6WWxWz/view?usp=share_link',
      name: 'Marathi Club of VIT, Bhopal',
      role: 'Design Lead (01-23 - 02-23)',
      test: "Worked as head of Design and Creatives Team of Marathi Club VIT, Bhopal and as a Core Organizer.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>How I work</h5>
      <h2>Work Experience</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsJournalPlus />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <h5>{test.role}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials