import './footer.css';

const footerListWrap =
  'flex md:flex-row flex-col xl:gap-[40px] md:gap-[20px] md:col-span-2 justify-start items-start md:gap-6 gap-2';

const footerListWrapper = 'flex flex-col justify-start items-start gap-4';

export default function Footer() {
  return (
    <div className='mt-[5rem] pb-[1rem]'>
      <div className='container'>
        <div id='Footer' className='footer-content-wrapper '>
          <div className='grid md:grid-rows-1 lg:grid-cols-7 grid-rows-3 gap-4 lg:gap-6 grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col items-start gap-8 justify-start md:col-span-3'>
              <a href='/' aria-current='page'>
                <h2 className='footer-logo'>Luísa Lino</h2>
              </a>
              <div className='flex flex-col gap-2'>
                <p>(+351) 910 399 982</p>
                <a href='mailto:luisarochalino@gmail.com' aria-current='page'>
                  luisarochalino@gmail.com
                </a>
              </div>
            </div>

            <div className={footerListWrap}>
              <div className='margin-bottom small'>
                <div className='label-wrapper'>
                  <h4 className='footer-label'>↳ Social</h4>
                </div>
              </div>
              <div className={footerListWrapper}>
                <a
                  href='https://www.behance.net/lusalino'
                  target='_blank'
                  className='footer-button w-inline-block'
                >
                  <div>
                    Behance
                    <br />
                  </div>
                </a>

                <a
                  href='https://pt.linkedin.com/in/luisarochalino'
                  target='_blank'
                  className='footer-button w-inline-block'
                >
                  <div>Linkedin</div>
                </a>
                <a
                  href='http://dribbble.com'
                  target='_blank'
                  className='footer-button w-inline-block'
                >
                  <div>Dribbble</div>
                </a>
              </div>
            </div>
            <div className={footerListWrap}>
              <div className='margin-bottom small'>
                <div className='label-wrapper'>
                  <h4 className='footer-label'>↳ Pages</h4>
                </div>
              </div>
              <div className={footerListWrapper}>
                <a
                  href='/'
                  aria-current='page'
                  className='footer-button w-inline-block w--current'
                >
                  <div>
                    Home
                    <br />
                  </div>
                </a>
                <a href='/projects' className='footer-button w-inline-block'>
                  <div>Projects</div>
                </a>
                <a href='/about-me' className='footer-button w-inline-block'>
                  <div>
                    About me
                    <br />
                  </div>
                </a>

                <a href='/contacts' className='footer-button w-inline-block'>
                  <div>Contacts</div>
                </a>
              </div>
            </div>
          </div>
          <div className='footer-bottom-bar'>
            <div>
              A special thanks to <b>Matilde Valente.</b>
            </div>

            <div>© {new Date().getFullYear()}. All right reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
