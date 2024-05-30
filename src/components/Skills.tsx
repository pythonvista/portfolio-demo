import HeadingStar from './HeadingStar';
import frontend from '../assets/svgs/frontend.svg';
import backend from '../assets/svgs/backend.svg';

type Skill = {icon: string; title: string; description: string};
const data: Skill[] = [
  {
    icon: frontend,
    title: 'Frontend development',
    description:
      'Creating visually appealing and user friendly interfaces for websites. I transform design concepts into interactive and responsive code, ensuring a seamless user experience.'
  },
  {
    icon: backend,
    title: 'Backend development',
    description:
      'Focus on creating and maintaining the server-side logic and APIs that power web applications. I build scalable architectures, handle server management, and implement security measures, optimized performance, and ensured seamless communication between clients and servers'
  }
];

const Skills = () => {
  return (
    <>
      <HeadingStar heading='Skills' />
      <div className='flex flex-wrap gap-4 justify-center relative overflow-hidden py-5'>
        {data.map(({icon, title, description}, i) => (
          <div
            key={i}
            className='w-11/12 sm:w-[45%] md:w-[30%] bg-[#FFFFFF1A] rounded-lg p-5'
          >
            <div className='border border-[#9F40FE] border-dashed rounded-full w-max mx-auto aspect-square flex items-center justify-center mb-3'>
              <img src={icon} alt='logo' className='w-3/5' />
            </div>
            <h2 className='uppercase font-semibold mb-3'>{title}</h2>
            <p className='mb-3'>{description}</p>
          </div>
        ))}
        {/* bottom eclipse  */}
        <div className='eclipse w-[300px] rounded-full aspect-square bg-[#9F40FE80] absolute -bottom-[100px] right-1/2 translate-x-1/2' />
      </div>
    </>
  );
};

export default Skills;
