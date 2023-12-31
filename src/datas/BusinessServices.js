// Import Assets
import Consulting from '../assets/icon/Consulting.png';
import Formations from '../assets/icon/Formations.png';
import Coaching from '../assets/icon/Coaching.png';
import Feedback from '../assets/icon/Feedback.png';
import Color from '../assets/icon/Color.png';
import Assessment from '../assets/icon/Assessment.png';

const commonLink = 'BusinessServices';

export const BusinessServicesList = [
  {
    title: 'HR Consulting',
    illustration: Consulting,
    text: 'I provide my help and my expertise to companies in order to achieve their objectives.',
    link: commonLink,
    anchor: 'HRConsulting'
  },
  {
    title: 'Formations',
    illustration: Formations,
    text: 'I offer training in communication, stress management and recruitment.',
    link: commonLink,
    anchor: 'Formations'
  },
  {
    title: 'Business Coaching',
    illustration: Coaching,
    text: 'I help leaders, managers and employees to become aware of their potential, to develop their self-confidence, to better manage their stress, to communicate better with their peers, their teams or their colleagues to give the best of themselves.',
    link: commonLink,
    anchor: 'BusinessCoaching'
  },
  {
    title: 'Feedback 360',
    illustration: Feedback,
    text: 'It is an employee evaluation process involving all stakeholders with an upstream or downstream link.',
    link: commonLink,
    anchor: 'Feedback360'
  },
  {
    title: 'Color Profil Teams',
    illustration: Color,
    text: 'Color Profils Teams profiling and workshops allow you to communicate better and truly collaborate, prevent conflicts and manage complex situations and also gain in fulfillment and performance.',
    link: commonLink,
    anchor: 'ColorProfilTeams'
  },
  {
    title: 'Carrier Assessment',
    illustration: Assessment,
    text: 'Internal mobility assistance tool for employees wishing to progress within their company and begin thinking about their professional future.',
    link: commonLink
  }
];
