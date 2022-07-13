import Avatar from '@/components/misc/avatar'
import Date from '@/components/misc/date'
import CoverImage from '@/components/shared/cover-image'
import Link from 'next/link'
import { topTags, secondaryTags } from '../../lib/siteDefault'

export default function HeroPost({ posts }) {
  // const { title, feature_image, published_at, excerpt, primary_author, slug, reading_time } = posts
  const importantTags = topTags.concat(secondaryTags)

  return (
    <section className='tag-hero bg-secondary'>
      <div className='container-fluid flex flex-wrap'>
        {posts.map(
          (
            {
              title,
              feature_image,
              published_at,
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
              //   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${feature_image})`,
              // }}
              className='w-full md:w-1/2 px-5 min-h-[350px] bg-cover bg-[center_top_20%] flex flex-col justify-end py-3 relative hero__post'
            >
              <Link href={`/${slug}`}>
                <a className='absolute w-full h-full hero__absolute-link bg-primary z-0'>
                  {title}
                </a>
              </Link>

              <div className={`${index === 0 ? 'xxl:pl-20' : null}`}>
                <Link href={`/${slug}`}>
                  <a className='2xl:text-2xl text-1xl uppercase font-bold relative z-10'>
                    <h3 className='w-7/8 uppercase font-bold'>
                      <span className='bg-quartenary'>{title}</span>
                    </h3>
                  </a>
                </Link>

                <div className='tags mt-2 mb-3 relative z-10'>
                  {tags.map(({ name, slug }, index) => (
                    // importantTags.includes(name) ? (
                    //   <Link href={`/tag/${slug}`} key={name}>
                    //     <a className="text-sm font-medium italic text-white hover:text-quartenary gap-x-1.5 mr-2">
                    //       {`#${ index < tags.length - 1 ? name+',' : name}`}
                    //     </a>

                    //   </Link>

                    // ) : null

                    <Link href={`/tag/${slug}`} key={name}>
                      <a className='text-sm font-medium italic text-white hover:text-quartenary gap-x-1.5 mr-2'>
                        {`#${index < tags.length - 1 ? name + ',' : name}`}
                      </a>
                    </Link>
                  ))}
                </div>

                <div className='hero__post-author relative z-10'>
                  {/* <Avatar
                    name={primary_author.name}
                    picture={primary_author.profile_image}
                    date={published_at}
                    color='white'
                  /> */}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
