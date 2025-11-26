import Tag, { type Colors } from '../../components/Tag/tag';

export default function ProjectDetails({
  data,
  children,
}: {
  data: any;
  children: any;
}) {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <div className='mb-12'>
        <div className='flex gap-3 mb-8'>
          {data.tags.map((item, index) => (
            <Tag
              key={index}
              color={item.color as Colors}
              text={item.text}
              small
            />
          ))}
        </div>

        <div className='flex md:flex-row flex-col gap-6 justify-between md:items-center'>
          <h1 className='font-normal max-w-[750px] md:!text-[42px] !text-3xl md:!leading-12 leading-10'>
            {data.title}
          </h1>
          <div className='md:text-right'>
            <p>
              {data.type} — {data.year}
            </p>
          </div>
        </div>
      </div>

      {/* Main Interface Screenshot */}
      <div className='md:mb-16 mb-8'>
        <img src={data.headerImg} />
      </div>

      {/* Project Description */}
      <div className='md:mb-16 mb-8 max-w-[830px]'>
        <p className='font-title text-2xl leading-tight font-light'>
          {data.description}
        </p>
      </div>

      {/* Problem & Solution */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-8 md:mb-16 mb-8'>
        <div className='flex flex-col gap-3'>
          <h3 className='!text-2xl font-body font-semibold mb-6'>Problem</h3>
          <p className='text-lg font-light leading-tight mb-3'>
            {data.problem}
          </p>
          {data.problemImg && (
            <img src={data.problemImg} className='align-bottom' />
          )}
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='!text-2xl font-body font-semibold mb-6'>Solution</h3>
          <p className='text-lg font-light leading-tight'>{data.solution}</p>
          {data.solutionImg && <img src={data.solutionImg} />}
        </div>
      </div>

      {children}

      {/* Reflection */}
      <div className='flex flex-col gap-3 max-w-[830px]'>
        <h3 className='!text-2xl font-body font-semibold mb-6'>Reflection</h3>
        <p className='text-lg font-light leading-tight'>
          {data.reflection.split('\n\n').map((para, index) => (
            <p key={index} className='mb-4'>
              {para}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}
