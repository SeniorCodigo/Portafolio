import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'alan.jpeg',
  paragraphOne:
    'React and React Native developer with more than 2 years of experience in technologies such as React, redux, hooks, context, third party APIs requests, Firebase, Express and Node.js. I have worked in different IT teams using agile methodologies like Scrum / Kanban to improve the company processes also I have met with clients to get new requirements and propose improvements for the platform. The ethics must be the value promoted to the teams and is the most important, because they are the rules that should guide us',
  // paragraphTwo: '',
  // paragraphThree: '',
  resume:
    'https://www.linkedin.com/in/alan-alvarado-salgado-548972176/detail/treasury/position:1742824550/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACnKE4gBVV3PsH-uG3q9rWqLRRot8ejc5tI%2C1635455857215)&section=position%3A1742824550&treasuryCount=1', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'OBILAB.jpg',
    title: 'OBILAB Laboratory',
    info:
      'Displays the results of patient studies in the mobile application to automate time in the laboratory. The doctor makes a diagnosis in actual time from the mobile application, depending on the results of the patient assigned from the mobile application. The laboratory worker improved his work performance for his patients and doctors from the web application, because they eliminated waiting queues.',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.obilab',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'food.jpg',
    title: 'Fooddy and gooddy',
    info:
      'I developed two applications (web and mobile) that are synchronized with the Firebase API, which is a real-time database, therefore its use is fast and effective when requesting orders. It saves the exhaustive work of the waiters and cooks to take the command to the kitchen and it is possible to take care of more diners quickly with the help of this technology. The application that is being offered is just a schematic and adjusts to my observed needs, but you can create any technology and adjust it to your needs as a company, you can even modify it and add more specifications to meet your demands.',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.foddyandgooddy',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  /* {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alvarade.alain@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alan-alvarado-salgado-548972176/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SeniorCodigo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
