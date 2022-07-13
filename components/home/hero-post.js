import Avatar from '@/components/misc/avatar'
import Date from '@/components/misc/date'
import CoverImage from '@/components/shared/cover-image'
import Link from 'next/link'
import { topTags, secondaryTags } from '../../lib/siteDefault'

export default function HeroPost({ posts }) {
  // console.log(posts)
  // const { title, feature_image, published_at, excerpt, primary_author, slug, reading_time } = posts
  const importantTags = topTags.concat(secondaryTags)

  return (
    <section className='hero bg-secondary'>
      <div className='container-fluid flex flex-wrap md:grid md:lg:grid-cols-4 md:grid-rows-2 lg:h-[650px]'>
        {posts.map(
          (
            {
              title,
              feature_image,
              published_at,
              excerpt,
              primary_author,
              slug,
              reading_time,
              tags,
            },
            index
          ) => (
            <div
              key={title}
              // style={{
              //   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
              // url(${feature_image})`,
              // }}
              className={`${
                index === 0
                  ? 'md:col-span-2 md:row-span-2 px-8 min-h-[450px] w-full'
                  : index === 1
                  ? 'md:row-span-2 px-5 md:min-h-[450px] min-h-[350px] w-full'
                  : 'md:col-span-1 md:row-span-1 px-5 min-h-[300px] w-1/2 md:w-full'
              } bg-cover bg-center flex flex-col justify-end py-3 relative hero__post`}
            >
              <Link href={`/${slug}`}>
                <a className='absolute w-full h-full hero__absolute-link bg-primary z-0'>
                  {title}
                </a>
              </Link>

              <Link href={`/${slug}`}>
                <a
                  className={`${
                    index === 0
                      ? '2xl:text-5xl xl:text-4xl text-3xl xl:leading-[3rem]'
                      : '2xl:text-2xl text-1xl'
                  } uppercase font-bold relative z-10`}
                >
                  <h2
                    className={`${
                      index === 0 ? '2xl:w-2/3 xl:w-3/4 w-full' : 'w-7/8'
                    } uppercase font-bold`}
                  >
                    <span className='bg-quartenary'>{title}</span>
                  </h2>
                </a>
              </Link>

              <div className='tags mt-2 mb-3 relative z-10 flex flex-wrap'>
                {tags.map(({ name, slug }, index) => (
                  <Link href={`/tag/${slug}`} key={name}>
                    <a className='text-sm italic text-white hover:text-quartenary mr-1'>
                      {`#${index < tags.length - 1 ? name + ',' : name}`}
                    </a>
                  </Link>
                ))}
              </div>

              <div
                className={`hero__post-author relative z-10 ${
                  index > 0 ? 'hidden md:block' : null
                }`}
              >
                {/* <Avatar
                  name={primary_author.name}
                  picture={primary_author.profile_image}
                  date={published_at}
                  color='white'
                /> */}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
