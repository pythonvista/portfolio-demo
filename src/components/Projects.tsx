import HeadingStar from './HeadingStar';
import ArrowDiagonal from './ArrowDiagonal';
import onstord from '../assets/images/onstord_preview.gif';
import tobi from '../assets/images/tobi_preview.gif';
import heartisan from '../assets/images/heartisan_preview.gif';
import oculus from '../assets/images/oculus.gif';

type Project = {
  imageSrc: string;
  title: string;
  description: string;
  url: string;
};

const data: Project[] = [
  {
    imageSrc: tobi,
    title: 'Tobi Closet',
    description:
      'E-commerce web application for the sale of quality thrift clothing',
    url: 'https://tc-comm-full.vercel.app'
  },
  {
    imageSrc: onstord,
    title: 'Onstord',
    description:
      'A web application for sharing educational resources between lectures and students',
    url: 'https://onstord-three.vercel.app'
  },
  {
    imageSrc: heartisan,
    title: 'Heartisan',
    description:
      'A web application for the ordering handyman services for repairs, rennovations and constructions',
    url: 'https://heartisan-clients.vercel.app/'
  },
  {
    imageSrc: oculus,
    title: 'Oculus',
    description: 'Demo landing page for a commercial AI landing page',
    url: 'https://oculus-sigma.vercel.app'
  }
];

function Projects() {
  return (
    <>
      <HeadingStar heading='Projects' />
      <h3 className='font-semibold text-xl text-center mb-5 sm:mb-10'>
        Take a look at some of my <span className='text-[#00FF57]'>work</span>
      </h3>

      <div className='flex flex-wrap gap-3 sm:gap-10 justify-center relative'>
        {data.map(({imageSrc, title, description, url}, i) => (
          <div
            className=' w-11/12 sm:w-[45%] max-w-[500px] bg-[#FFFFFF1A] rounded-lg overflow-hidden mb-3 pb-3'
            key={i}
          >
            <div className='max-h-52 overflow-hidden'>
              <img src={imageSrc} alt='' className='w-full' />
            </div>
            <div className='mt-3 mx-3 flex gap-2 items-center'>
              <span>
                <h3 className='font-bold text-xl'>{title}</h3>
                <p className='text-[#A9A9A9] text-xs sm:text-sm'>
                  {description}
                </p>
              </span>
              <a
                className='bg-[#9F40FE] p-2 rounded-full cursor-pointer'
                target='_blank'
                href={url}
              >
                <ArrowDiagonal />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
