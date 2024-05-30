import HeadingStar from './HeadingStar';
import {Frontend, Backend, Database, Teamwork, Testing} from './SVGs';
import {Solutions} from './SVGs';

type Skill = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const data: Skill[] = [
  {
    Icon: Frontend,
    title: 'Frontend development',
    description:
      'Creating visually appealing and user friendly interfaces for websites. I transform design concepts into interactive and responsive code, ensuring a seamless user experience.'
  },
  {
    Icon: Backend,
    title: 'Backend development',
    description:
      'Focus on creating and maintaining APIs that power web applications. I build scalable architectures, handle server management, and implement security measures, optimize performance, and ensure seamless communication between clients and servers'
  },
  {
    Icon: Database,
    title: 'Database management',
    description:
      'Designing, implementing, and maintaining databases to ensure data integrity and accessibility. Skilled in SQL and NoSQL technologies, I optimize queries and manage data storage solutions'
  },
  {
    Icon: Testing,
    title: 'Perfomance Testing',
    description:
      'Proficient in performance testing, I ensure web applications are optimized for speed, scalability, and reliability. Utilizing tools like Cypress and Playwright, I optimize code and enhance user experience'
  },
  {
    Icon: Teamwork,
    title: 'Teamwork and collaboration',
    description:
      'With strong communication and adaptability, I actively contribute to team efforts, share ideas, and collaborate effectively with designers and other developers'
  },
  {
    Icon: Solutions,
    title: 'Complex Problem-solving',
    description:
      'I tackle complex software development challenges with innovative solutions and a logical approach. By debugging issues, optimizing code, and improving functionality, I ensure high-quality results'
  }
];

const Skills = () => {
  return (
    <>
      <HeadingStar heading='Skills' />
      <div className='flex flex-wrap gap-4 justify-center relative overflow-hidden py-5'>
        {data.map(({Icon, title, description}, i) => (
          <div
            key={i}
            className='w-11/12 sm:w-[45%] md:w-[30%] bg-[#FFFFFF1A] rounded-lg p-5'
          >
            <div className='border border-[#9F40FE] p-2 border-dashed rounded-full w-max flex items-center justify-center mb-3'>
              <Icon />
            </div>
            <h2 className='uppercase font-semibold mb-3 text-sm'>{title}</h2>
            <p className='mb-3 text-xs'>{description}</p>
          </div>
        ))}
        {/* bottom eclipse  */}
        <div className='eclipse w-[300px] rounded-full aspect-square bg-[#9F40FE80] absolute -bottom-[100px] right-1/2 translate-x-1/2' />
      </div>
    </>
  );
};

export default Skills;
