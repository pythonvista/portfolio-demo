import {memo} from 'react';
import HeadingStar from './HeadingStar';

//eslint-disable-next-line
export default memo(() => {
  return (
    <>
      <HeadingStar heading='Contact me' id='contact-me' />
      <div className='flex flex-col md:flex-row p-5 sm:p-10 justify-between'>
        <p className='mb-6 md:mb-10 text-left'>
          <span className='font-bold text-3xl sm:text-4xl text-[#FFFFFF33] mb-3 block'>
            Let's work together
          </span>
          <span className='italic mb-2 block'>
            "Every Innovation started with communication"
          </span>
          <span className='mb-2 pr-10 block'>
            Would like to reach out to me? fill the contact form and let's talk
          </span>
        </p>
        <form
          action=''
          className='text-white w-full sm:w-1/2 min-w-[280px]'
          autoComplete='off'
        >
          <div className='border border-[#FFFFFFE5] rounded-lg p-2 mb-2'>
            <label htmlFor='name' className='text-white block'>
              Enter your name
            </label>
            <input
              type='text'
              id='name'
              required
              className='outline-none appearance-none block bg-gray-900'
            />
          </div>

          <div className='border border-[#FFFFFFE5] rounded-lg p-2 mb-2'>
            <label htmlFor='email' className=' block'>
              Enter your email address
            </label>
            <input
              type='email'
              id='email'
              required
              className='outline-none appearance-none block bg-gray-900'
            />
          </div>

          <div className='border border-[#FFFFFFE5] rounded-lg p-2 mb-2'>
            <label htmlFor='message' className=' block'>
              Enter your message
            </label>
            <textarea
              id='message'
              required
              rows={4}
              className='outline-none w-full appearance-none block bg-gray-900'
            />
          </div>

          <button className='bg-[#9f40fe] px-3 py-3 rounded-lg'>
            Send message
          </button>
        </form>
      </div>
    </>
  );
});
