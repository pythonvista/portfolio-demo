import pear from '../assets/svgs/pear.svg';
import github from '../assets/svgs/github.svg';
import facebook from '../assets/svgs/facebook.svg';
import phone from '../assets/svgs/phone.svg';
import whatsapp from '../assets/svgs/whatsapp.svg';
import twitter from '../assets/svgs/twitter.svg';

const socialIcons = [github, facebook, phone, whatsapp, twitter];

const contacts: {link: string; svg: string}[] = [];

//Whatsapp, Phone, Email

const Footer = () => {
  return (
    <footer className='flex flex-wrap px-4 flex-col sm:flex-row gap-3 justify-center items-start sm:items-center'>
      <div>
        <img src={pear} alt='icon' width={40} />
        <h4 className='text-[#9F40FE] text-2xl font-semibold mb-3'>
          My handles
        </h4>
        <p className='mb-3'>
          Feel free to reach me on any of the following handles
        </p>
        <div className='w-2/5 mb-3 flex gap-4 sm:gap-5'>
          {socialIcons.map((svg, i) => (
            <img src={svg} alt='' key={i} className='w-[15%]' />
          ))}
        </div>
      </div>
      <p className='w-full text-sm sm:text-base text-center text-[#FFFFFF66] mb-3'>
        Copywright &copy; {new Date().getFullYear()} | Michael Olofin
      </p>
    </footer>
  );
};

export default Footer;
