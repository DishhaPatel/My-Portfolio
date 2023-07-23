import React from "react";
import { Icon } from "@iconify/react";

function SocialLinks() {
  const SOCIAL_LINKS = [
    {
      icon: "akar-icons:linkedin-fill",
      link: "https://www.linkedin.com/in/disha-patel-69072a22b",
    },
    {
      icon: "akar-icons:github-fill",
      link: "https://github.com/DishhaPatel",
    },
    {
      icon: "akar-icons:instagram-fill",
      link: "https://instagram.com/ll_dishhu_.ll",
    },
  ];

  return (
    <>
      {SOCIAL_LINKS.map((social) => (
        <a href={social.link} className="social-links" target="_blank" rel="noreferrer">
          <Icon icon={social.icon} width={20} />
        </a>
      ))}
    </>
  );
}

export default SocialLinks;
