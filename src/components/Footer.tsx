import pear from '../assets/svgs/pear.svg';
import {Github, Mail, Phone, Whatsapp} from './SVGs';

type Contact = {link: string; icon: React.FC<React.SVGProps<SVGSVGElement>>};

const contacts: Contact[] = [
  {link: 'https://wa.me/+2347033165100', icon: Whatsapp},
  {link: 'tel+2347033165100', icon: Phone},
  {link: 'mailto:damzymike@gmail.com', icon: Mail},
  {link: 'https://github.com/damzymichael', icon: Github}
];

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
          {contacts.map((contact, i) => (
            <a href={contact.link} key={i} target='_blank'>
              <contact.icon />
            </a>
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
