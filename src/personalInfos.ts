const socialMediaList = [
    { key: "linkedin", link: "https://www.linkedin.com/in/mauricioblasque/", icon: "fa-linkedin-square" },
    { key: "gihub", link: "https://github.com/mblasque", icon: "fa-github" },
    { key: "facebook", link: "https://www.facebook.com/mauricio.blasque", icon: "fa-facebook-square" },
    { key: "instagram", link: "https://www.instagram.com/mauricioblasque/", icon: "fa-instagram" },
  ];

  const experienceList = [
    { key: "meta", company: "Meta", interval: "metaInterval", position: "softwareEngineer", site: "www.meta.com.br" },
    { key: "invillia", company: "Invillia", interval: "invilliaInterval", position: "softwareEngineer", site: "www.invillia.com" },
    { key: "app1", company: "App Sistemas", interval: "appInterval1", position: "techLead", site: "www.appsistemas.com.br" },
    { key: "app2", company: "App Sistemas", interval: "appInterval2", position: "fullStack", site: "www.appsistemas.com.br" },
    { key: "fmz", company: "FMZ", interval: "fmzInterval", position: "delphiDev", site: "www.fmz.com.br" },
    { key: "automasoft", company: "Automasoft", interval: "automasoftInterval", position: "delphiDev", site: "http://www.automasoft.com.br/" },
  ];

  const educationList = [
    { key: "usp", school: "usp", interval: "2020 - 2022", course: "uspCourse" },
    { key: "senac", school: "senac", interval: "2015 - 2017", course: "senacCourse" },
    { key: "unirp", school: "unirp", interval: "2010 - 2014", course: "unirpCourse"}
  ];

  const certificationList = [
    { key: "psmii", date: "psmiiDate", desc: "PSM II - Professional Scrum Master™ - Scrum.org" },
    { key: "m30", date: "m30Date", desc: "Fundamentals Online Workshop Management 3.0" },
    { key: "sps", date: "spsDate", desc: "SPS - Scaled Professional Scrum™ - Scrum.org" },
    { key: "psmi", date: "psmiDate", desc: "PSM I - Professional Scrum Master™ - Scrum.org" }
  ];

  const skillList = [
    { key: "netCore", desc: ".NET", level: 90 },
    { key: "javaScript", desc: "JavaScript", level: 70 },
    { key: "react", desc: "React JS", level: 60 },
    { key: "angular", desc: "Angular", level: 50 },
    { key: "azure", desc: "Azure", level: 30 },
    { key: "aws", desc: "AWS", level: 20 },
    { key: "scrum", desc: "Scrum", level: 95 },
    { key: "kanban", desc: "Kanban", level: 70 },
    { key: "git", desc: "Git", level: 80 },
    { key: "TDD", desc: "TDD", level: 60 }
  ]

  export const SocialMedia = socialMediaList;
  export const Experience = experienceList;
  export const Education = educationList;
  export const Certifications = certificationList;
  export const Skills = skillList;