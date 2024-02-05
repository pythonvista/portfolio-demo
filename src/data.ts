import people_working from './assets/images/people-working.png';
import target_aim from './assets/images/target-aim.png';
import speed_meter from './assets/images/speed-meter.png';
import screw from './assets/images/dotted-light-bulb.png';

export interface Value {
  heading: string;
  description: string;
  imageString?: string;
}

export const ValuesData: Value[] = [
  {
    heading: 'Seamlessness',
    description:
      'Highlighting elements on web pages, making it easier for clients and users to identify specific elements.',
    imageString: people_working
  },
  {
    heading: 'Optimization',
    description:
      'Studying the impact of the application on network resources, allowing clients and users to optimize performance and efficiency.',
    imageString: screw
  },
  {
    heading: 'Inspection',
    description:
      'Enabling clients and users to quickly inspect changes to CSS styles, ensuring that the visual appearance of web pages meets their requirements.',
    imageString: speed_meter
  },
  {
    heading: 'Comprehensive',
    description:
      'Providing advanced settings and features for more in-depth development and debugging tasks.',
    imageString: target_aim
  }
];
