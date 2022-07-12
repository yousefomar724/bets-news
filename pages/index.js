// import HeroPost from '@/components/home/hero-post'
// import HomePost from '@/components/home/home-content'
import dynamic from 'next/dynamic'
const HomePost = dynamic(() => import('@/components/home/home-content'))
const HeroPost = dynamic(() => import('@/components/home/hero-post'))
const Layout = dynamic(() => import('@/components/layouts/layout'))
const CategoryMatrix = dynamic(() =>
  import('@/components/shared/categories-matrix')
)
const TagPostsGrid = dynamic(() => import('@/components/post/posts-by-tag-002'))
import Meta from '@/components/meta/meta'
// import Layout from '@/components/layouts/layout'
// import CategoryMatrix from '@/components/shared/categories-matrix'
// import TagPostsGrid from '@/components/post/posts-by-tag-002'
import { getAllPostsForHome, getPostsByTag, getAllSettings } from '@/lib/api'
import { getAllTags } from '@/lib/api'

export default function Index({
  allPosts,
  tagPostsTop,
  tagPostsBrasil,
  postMeta,
  settings,
  customTagTitle,
  customTagLink,
  tags,
}) {
  // console.log(tags)
  // const heroPost = allPosts.slice(0)
  // const thenPosts = allPosts.slice(0)
  // const morePosts = allPosts.slice(0)
  return (
    <>
      <Meta settings={settings} />
      <Layout settings={settings}>
        {/* {heroPost && <HeroPost posts={heroPost} />} */}
        {/* {morePosts.length > 0 && (
          <HomePost
            posts={morePosts}
            thenPosts={thenPosts}
            meta={postMeta}
            all_posts_count={allPosts.lenght}
            tag_top={tagPostsTop}
          />
        )} */}
        {<CategoryMatrix settings={settings} />}
        {
          <TagPostsGrid
            posts={tagPostsBrasil}
            tagTitle={customTagTitle}
            tagLink={customTagLink}
          />
        }
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // const allPosts = (await getAllPostsForHome()) || []
  const tagPostsTop = (await getPostsByTag('noticias-do-dia')) || []
  const tagPostsBrasil = (await getPostsByTag('brasil', 5)) || []
  const settings = await getAllSettings()
  const tags = await getAllTags()
  const customTagTitle = 'Brasil'
  const customTagLink = '/tag/brasil'

  // const postMeta = allPosts.meta
  return {
    props: {
      // allPosts,
      tagPostsTop,
      // postMeta,
      settings,
      tagPostsBrasil,
      customTagTitle,
      customTagLink,
      tags,
    },
    revalidate: 1,
  }
}
