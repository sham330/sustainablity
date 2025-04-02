import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CEO & Founder",
      bio: "Environmental engineer with 15 years in waste management innovation.",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      social: [
        { icon: faLinkedin, url: "#", label: "LinkedIn" },
        { icon: faTwitter, url: "#", label: "Twitter" },
      ],
    },
    {
      id: 2,
      name: "David Park",
      position: "CTO",
      bio: "AI and IoT specialist leading our technology development.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: [
        { icon: faLinkedin, url: "#", label: "LinkedIn" },
        { icon: faGithub, url: "#", label: "GitHub" },
      ],
    },
    {
      id: 3,
      name: "Maria Gonzalez",
      position: "Head of Operations",
      bio: "Logistics expert ensuring seamless waste collection services.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      social: [{ icon: faLinkedin, url: "#", label: "LinkedIn" }],
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Sustainability Director",
      bio: "Leads our environmental impact initiatives and partnerships.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      social: [
        { icon: faLinkedin, url: "#", label: "LinkedIn" },
        { icon: faTwitter, url: "#", label: "Twitter" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ecoGreen font-semibold tracking-wide uppercase">
            Our Team
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the experts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            The passionate team behind EcoSort Pro's innovative solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300"
            >
              <img
                className="mx-auto h-32 w-32 rounded-full object-cover"
                src={member.image}
                alt={member.name}
                loading="lazy"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{member.position}</p>
              <p className="mt-4 text-gray-600 text-sm">{member.bio}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {member.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-500 hover:text-ecoGreen transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ecoGreen hover:bg-green-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Join our team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
