import Image from 'next/image'
import Date from '@/components/misc/date'

export default function Avatar({
  name,
  picture,
  date,
  color = 'current',
  show_name = 'true',
}) {
  const userImage = picture
    ? picture + '?auto=format,compress,enhance&w=100&h=100'
    : '/artigos/vectors/bets.svg'
  const extraClass = picture ? '' : '!p-2'

  const AuthorName = () => {
    if (show_name === 'true') {
      return (
        <span className={`text-white text-base font-thin text-${color} mr-2`}>
          {date ? name + ',' : name}
        </span>
      )
    } else {
      return null
    }
  }

  const postDate = () => {
    if (date) {
      return (
        <span
          className={`sm:text-sm text-white text-base font-thin text-${color}`}
        >
          {<Date dateString={date} />}
        </span>
      )
    } else {
      return null
    }
  }

  return (
    <div className='flex items-center'>
      <div className='w-10 md:w-12 h-10 md:h-12 relative mr-4'>
        <Image
          src={userImage}
          layout='fill'
          loading='lazy'
          className={`rounded-full bg-black ${extraClass}`}
          alt={name}
        />
      </div>

      {AuthorName()}
      {postDate()}
    </div>
  )
}
