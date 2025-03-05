import React from 'react';
import { BriefcaseIcon, AcademicCapIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-linkedin-blue to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Profile Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="-mt-12 relative">
          <img
            className="h-32 w-32 rounded-full border-4 border-white object-cover bg-white"
            src="/profile.png"
            alt="Reza Aldiansyah"
          />
          
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Reza Aldiansyah, MTI, PMP</h1>
            <p className="text-gray-600">Digital Business & Project Management Consultant | Lecturer | Indonesia Digital Entrepreneur</p>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPinIcon className="h-5 w-5 mr-1" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className="text-gray-700">
            More than 10 years experiences proven as ICT professional and lecturer. Hold global certification in project management (PMP® credential). Strong knowledge and experiences in IT Strategic Planning, Business Development, Mobile Core Network (GSM&UMTS) Operation & Maintenance, Engineering, Performance and Optimization.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <BriefcaseIcon className="h-6 w-6 text-gray-600 mr-2" />
            <h2 className="text-xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="experience-item">
              <h3 className="font-semibold">Chief Business Development Officer</h3>
              <p className="text-gray-600">Pinara Digital · Self-employed</p>
              <p className="text-gray-500 text-sm">Jan 2022 - Present · 3 yrs 3 mos</p>
              <p className="text-gray-600">Jakarta, Indonesia · Hybrid</p>
            </div>
            <div className="experience-item">
              <h3 className="font-semibold">Information Technology Project Management Consultant</h3>
              <p className="text-gray-600">Business Management Consulting and Project Management Service Provider · Freelance</p>
              <p className="text-gray-500 text-sm">Jun 2015 - Present · 9 yrs 10 mos</p>
              <p className="text-gray-600">Greater Jakarta Area, Indonesia</p>
            </div>
            <div className="experience-item">
              <h3 className="font-semibold">Lecturer</h3>
              <p className="text-gray-600">University of Indonesia · Part-time</p>
              <p className="text-gray-500 text-sm">Jan 2020 - Dec 2021 · 2 yrs</p>
              <p className="text-gray-600">Depok, West Java, Indonesia · Hybrid</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <AcademicCapIcon className="h-6 w-6 text-gray-600 mr-2" />
            <h2 className="text-xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="education-item">
              <h3 className="font-semibold">University of Indonesia</h3>
              <p className="text-gray-600">Magister, Information Technology</p>
              <p className="text-gray-500 text-sm">2008 - 2010</p>
              <p className="text-gray-600">GPA = 3.78</p>
            </div>
            <div className="education-item">
              <h3 className="font-semibold">Sekolah Tinggi Teknologi Telkom</h3>
              <p className="text-gray-600">Bachelor Degree, Telecommunication</p>
              <p className="text-gray-500 text-sm">2001 - 2006</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Project Management',
              'Stakeholder Management',
              'IT Management',
              'Project Oversight',
              'Operational Oversight',
              'Business Development',
              'IT Strategic Planning'
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-linkedin-gray rounded-full text-gray-700 text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Organizations Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Organizations</h2>
          <div className="space-y-4">
            <div className="organization-item">
              <h3 className="font-semibold">Project Management Institute Indonesia Chapter</h3>
              <p className="text-gray-600">Board Member of General Secretary · Jul 2014 - Present</p>
            </div>
            <div className="organization-item">
              <h3 className="font-semibold">YISC Al-Azhar</h3>
              <p className="text-gray-600">Member · Jan 2012 - Dec 2013</p>
              <p className="text-gray-700 mt-2">Appointed as Project Manager/Event Manager (September 2012 - March 2013) to plan, manage and ensure the annual event held by the organization in the middle of January 2013.</p>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recommendations</h2>
          <div className="space-y-6">
            <div className="recommendation-item">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <h3 className="font-semibold">Dhimas Akbar Noor Baihaque</h3>
                  <p className="text-gray-600">Full Stack Developer | Passionate in Software Engineering</p>
                  <p className="text-gray-500 text-sm">March 30, 2017</p>
                  <p className="mt-2 text-gray-700">"Mr. Reza is an awesome lecturer in a project management and good mentor with nice attitudes at Integrated School of Technopreneur and Open Source Technology Nurul Fikri."</p>
                </div>
              </div>
            </div>
            <div className="recommendation-item">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <h3 className="font-semibold">Dede Hamzah</h3>
                  <p className="text-gray-600">Software Engineer</p>
                  <p className="text-gray-500 text-sm">January 19, 2015</p>
                  <p className="mt-2 text-gray-700">"I don't have many words to describe Mr. Reza. He is one of the best lecturer i know in STT Nurul Fikri. He always request a feedback at the end of semester about the way he teach us. He is a very punctual person, and also a good listener."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Courses Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Languages & Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Languages</h3>
              <div className="space-y-2">
                <div className="language-item">
                  <p className="font-medium">Arabic</p>
                  <p className="text-gray-600">Elementary proficiency</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Courses</h3>
              <div className="space-y-2">
                <div className="course-item">
                  <p className="font-medium">Project Management Professional</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;