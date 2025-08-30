import { Link } from 'react-router-dom';
import { CustomLinkText } from './LinkText';

const footerListWrap = 'flex xl:gap-[40px] justify-start items-start gap-6 ';

const footerListWrapper = 'flex flex-col justify-start items-start gap-3';

const textWrapper = 'text-2xl leading-0.5';

export default function Footer() {
  return (
    <div className='md:pt-[5rem] pt-[3rem] pb-[1rem]'>
      <div className='max-w-[1700px] mx-auto px-4 md:px-8 flex flex-col gap-8'>
        <div id='Footer' className='flex gap-[4rem] flex-col'>
          <div className='grid md:grid-rows-1 md:grid-cols-7 gap-14 md:gap-6 grid-cols-1'>
            <div className='flex flex-col items-start gap-8 justify-start md:col-span-3'>
              <Link to='/' aria-current='page'>
                <h2 className='md:!text-[2rem] !text-3xl'>Luísa Lino</h2>
              </Link>
              <div className='flex flex-col gap-2'>
                <p className='md:text-xl !text-lg'>(+351) 910 399 982</p>
                <Link to='mailto:luisarochalino@gmail.com' aria-current='page'>
                  <CustomLinkText
                    buttonText='luisarochalino@gmail.com'
                    textSize='md:text-xl !text-lg'
                  />
                </Link>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 md:col-span-4 gap-10 sm:gap-2'>
              <div className={footerListWrap}>
                <div className='margin-bottom small'>
                  <div className='flex gap-1'>
                    <h4>↳ Social</h4>
                  </div>
                </div>
                <div className={footerListWrapper}>
                  <a
                    href='https://www.behance.net/lusalino'
                    target='_blank'
                    className={textWrapper}
                  >
                    <CustomLinkText buttonText='Behance' />
                  </a>

                  <a
                    href='https://pt.linkedin.com/in/luisarochalino'
                    target='_blank'
                    className={textWrapper}
                  >
                    <CustomLinkText buttonText='LinkedIn' />
                  </a>
                  <a
                    href='http://dribbble.com'
                    target='_blank'
                    className={textWrapper}
                  >
                    <CustomLinkText buttonText='Dribbble' />
                  </a>
                </div>
              </div>
              <div className={footerListWrap}>
                <div className='margin-bottom small'>
                  <div className='flex gap-1'>
                    <h4>↳ Pages</h4>
                  </div>
                </div>
                <div className={footerListWrapper}>
                  <Link to='/' aria-current='page' className={textWrapper}>
                    <CustomLinkText buttonText='Home' />
                  </Link>
                  <Link to='/projects' className={textWrapper}>
                    <CustomLinkText buttonText='Projects' />
                  </Link>
                  <Link to='/about-me' className={textWrapper}>
                    <CustomLinkText buttonText='About me' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 md:justify-between items-start mt-4'>
            <div className='text-base'>
              A special thanks to <b>Matilde Valente.</b>
            </div>

            <div className='text-base'>
              © {new Date().getFullYear()}. All right reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
