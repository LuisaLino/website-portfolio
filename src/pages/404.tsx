import ArrowButton from '../components/Button';
import '../css/luisas-website.css';

export default function NotFound() {
  return (
    <div className='utility-page-wrap'>
      <div className='utility-page-content'>
        <div className='display-large'>Page Not Found</div>
        <h2 className='display-8xl'>404</h2>
        <div className='_50-ch-max'>
          We&#x27;re sorry, but the page you&#x27;re looking for doesn&#x27;t
          exist. It might have been moved, deleted, or perhaps it never existed
          at all.
        </div>
        <ArrowButton link='/' text='Go Home' />
      </div>
    </div>
  );
}
