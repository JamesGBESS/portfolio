import {
  laravel,
  flask,
  vue,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  yowl,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  reactnative,
  php,
  nestjs,
  nextjs,
  dashboard,
  epiture,
  eventmanagement,
  freeads,
  myshop,
  postit,
  showtime,
  todolist,
  trelloclonedesktop,
  Yowl,
  images

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur web",
    icon: web,
  },
  {
    title: "Développeur backend",
    icon: mobile,
  },
  {
    title: "Designer UI/UX",
    icon: backend,
  },
  {
    title: "Devops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "React native",
    icon: reactnative,
  },
  {
    name: "Python 3",
    icon: python,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "YOWL",
    company_name: "EPITECH",
    icon: yowl,
    iconBg: "#383E56",
    date: "Technologies: Vue js et Laravel",
    points: [
      "Parmi les nombreux projets développés à EPITECH-Bénin, YOWL fut l'un des plus grands et pationnants projets que j'ai eu à développer avec mon équipe. Il consistait à créer une plateforme web qui permet de commenter tous les contenus sur internet."
    ],
  },
  {
    title: "Show time",
    company_name: "EPITECH",
    icon: images,
    iconBg: "#E6DEDD",
    date: "Technologies: Nest js et pug",
    points: [
      "Show time était un projet passionnant où il fallait gérer la vente des tickets de concerts et les réservations pour les salles de cinema et les agences évènementielles." 
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Show time",
    description:
      "Plateforme Web qui permet aux utilisateurs de faire des réservations ou d'acheter des tickets pour des évènements et des concerts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "black-text-gradient",
      },
    ],
    image: showtime,
    source_code_link: "https://github.com/JamesGBESS",
  },
  {
    name: "Rotten tomatoes",
    description:
      "Application web qui propose des films pour les fans de cinema. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: epiture,
    source_code_link: "https://github.com/JamesGBESS",
  },
  {
    name: "My shop",
    description:
      "Site e-commerce pour la vente de produits",
    tags: [
      {
        name: "phpnative",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: myshop,
    source_code_link: "https://github.com/JamesGBESS",
  },
  {
    name: "Dashboard",
    description:
      "Application web qui fonctionne comme un dashboard proposant plusieurs services à l'utilisateurs",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/JamesGBESS",
  },
  {
    name: "Yowl",
    description:
      "Plateforme web permettant de commenter tous les contenus sur internet.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Yowl,
    source_code_link: "https://github.com/JamesGBESS",
  },
  {
    name: "Trello Clone Desktop",
    description:
      "Application web ayant presques les mêmes fonctionnalités que trello.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: trelloclonedesktop,
    source_code_link: "https://github.com/JamesGBESS",
  },
];

export { services, technologies, experiences, testimonials, projects };
