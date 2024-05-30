import green_star from '../assets/svgs/green-star.svg';

interface HeadingStarProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
}

//eslint-disable-next-line
export default ({heading, ...props}: HeadingStarProps) => {
  return (
    <div className='w-max mx-auto flex' {...props}>
      <h2 className='text-[#9F40FE] mb-4 font-semibold text-2xl sm:text-3xl'>
        {heading}
      </h2>
      <img src={green_star} alt='icon' className='w-6 -translate-y-8' />
    </div>
  );
};
