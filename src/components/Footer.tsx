import { CustomLinkText } from './LinkText';

const footerListWrap =
  'flex md:flex-row flex-col xl:gap-[40px] md:gap-[20px] md:col-span-2 justify-start items-start md:gap-6 gap-2';

const footerListWrapper = 'flex flex-col justify-start items-start gap-3';

const textWrapper = 'text-2xl leading-0.5';

export default function Footer() {
  return (
    <div className='pb-[1rem]'>
      <div className='container'>
        <div id='Footer' className='flex gap-[4rem] flex-col'>
          <div className='grid md:grid-rows-1 lg:grid-cols-7 grid-rows-3 gap-4 lg:gap-6 grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col items-start gap-8 justify-start md:col-span-3'>
              <a href='/' aria-current='page'>
                <h2 className='md:!text-[2rem] !text-3xl'>Luísa Lino</h2>
              </a>
              <div className='flex flex-col gap-2'>
                <p className='md:text-xl !text-lg'>(+351) 910 399 982</p>
                <a href='mailto:luisarochalino@gmail.com' aria-current='page'>
                  <CustomLinkText
                    buttonText='luisarochalino@gmail.com'
                    textSize='md:text-xl !text-lg'
                  />
                </a>
              </div>
            </div>

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
                <a href='/' aria-current='page' className={textWrapper}>
                  <CustomLinkText buttonText='Home' />
                </a>
                <a href='/projects' className={textWrapper}>
                  <CustomLinkText buttonText='Project' />
                </a>
                <a href='/about-me' className={textWrapper}>
                  <CustomLinkText buttonText='About me' />
                </a>

                <a href='/contacts' className={textWrapper}>
                  <CustomLinkText buttonText='Contacts' />
                </a>
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
