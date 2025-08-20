import { Link, Outlet } from 'react-router-dom';

export default function ProjectsLayout() {
  return (
    <div className='min-h-screen'>
      <Link to='/projects' className='absolute group flex top-24 left-6'>
        <div className='font-title rotate-180 mr-3'>→</div>{' '}
        <span className='font-title text-xl'>View All</span>
        <span className='absolute bottom-0 left-0 w-full h-[2px] bg-black rounded transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100'></span>
      </Link>
      <div className='max-w-5xl mx-auto px-8 pt-48 pb-16'>
        <Outlet />
      </div>
    </div>
  );
}
