import imageS4ANG from '../assets/images/S4NG/S4NG-Preview.png';
import imageTrue from '../assets/images/True/True-cover.png';
import imageViaMap from '../assets/images/Via-Map/via-map-cover.png';
import imageVizzi from '../assets/images/Vizzi/Vizzi-cover.png';
import type { Colors } from '../components/Tag/tag';

export const cards: Array<{
  id: number;
  link: string;
  imgUrl: string;
  title: string;
  tags: Array<{ color: Colors; text: string }>;
}> = [
  {
    link: 'via-map-workflow-designer',
    imgUrl: imageViaMap,
    title: 'VIA-MAP | Workflow Designer',
    id: 1,
    tags: [
      {
        text: 'Visual Design',
        color: 'yellow',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
      {
        text: 'User Research',
        color: 'green',
      },
    ],
  },
  {
    link: 'vizzi-bacloffice-ui-redesign',
    imgUrl: imageVizzi,
    title: 'Vizzi | Backoffice UI Redesign',
    id: 2,
    tags: [
      {
        text: 'Visual Design',
        color: 'yellow',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
    ],
  },
  {
    link: 's4ng-uporto-accessible-platform',
    imgUrl: imageS4ANG,
    title: 'S4NG U.Porto | Accessible Platform',
    id: 3,
    tags: [
      {
        text: 'Visual Design',
        color: 'yellow',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
      {
        text: 'User Research',
        color: 'green',
      },
    ],
  },
  {
    link: 'true-project-platform-for-creating-school-newspapers',
    imgUrl: imageTrue,
    title: 'True Project | Platform for Creating School Newspapers ',
    id: 4,
    tags: [
      {
        text: 'Visual Design',
        color: 'yellow',
      },
      {
        text: 'Graphic Design',
        color: 'pink',
      },
      {
        text: 'UX/UI Design',
        color: 'blue',
      },
    ],
  },
];
