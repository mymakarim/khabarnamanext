import { useRouter } from 'next/router'
import ResponsiveArticle from '../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import ImageComponentity from './../../components/ImageComponentity'

function Blog({ post }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <Head>{ReactHtmlParser(post.yoast_head)}</Head>
      <div className='px-5'>
        <div id={post.id} className='blog flex flex-col mx-auto px-5'>
          <div className='flex flex-col gap-3 p-7 pb-3'>
            <h1
              className='font-semibold text-xl md:text-2xl inline-block hover:text-red-700 transition duration-500 ease-in-out inline-block mb-2'
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className='flex justify-between'>
              <div className='w-64 flex items-center'>
                <a href='#'>
                  <img
                    className='w-10 h-10 rounded-full mr-2'
                    src='http://gravatar.com/avatar/1bcee227e2490179e277a951c2bc769e'
                    alt='Avatar of Jonathan Reinink'
                  />
                </a>
                <div className='text-xs'>
                  <a
                    href='#'
                    className='text-gray-900 font-semibold leading-none text-sm hover:text-red-700'
                  >
                    Reporterly
                  </a>
                  <p className='text-gray-600 text-xs'>writer</p>
                </div>
              </div>
              <div className='share flex items-center text-gray-600'>
                <svg className='h-7 mr-1' fill='currentColor' viewBox='0 0 1024 1024'>
                  <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z' />
                </svg>

                <svg className='h-7 mr-1' fill='currentColor' viewBox='0 0 1024 1024'>
                  <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z' />
                </svg>

                <svg className='h-7' fill='currentColor' viewBox='0 0 1024 1024'>
                  <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='relative'>
            {post.featured_media != 0 && post.featured_media != null && (
              <ImageComponentity
                src={post._embedded['wp:featuredmedia'][0].source_url}
                classes={'h-72 bg-gray-300'}
                alt={post.title.rendered}
              />
            )}
          </div>
          <div className='p-7 pb-5 border-b border-gray-100'>
            <div
              className='text-gray-700 text-base leading-8'
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <div className='text-sm font-regular text-gray-900 flex mt-4 flex items-center justify-between'>
              <div className='flex'>
                <span className='mr-3 flex flex-row items-center'>
                  <svg
                    className='text-red-800'
                    fill='currentColor'
                    height='13px'
                    width='13px'
                    version='1.1'
                    id='Layer_1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 512 512'
                  >
                    <g>
                      <g>
                        <path
                          d='M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z'
                        />
                      </g>
                    </g>
                  </svg>
                  <span className='ml-1'>6 mins ago</span>
                </span>
                <a href='#' className='mr-3 flex items-center hover:text-red-700'>
                  <svg
                    className='h-5 text-red-800'
                    fill='currentColor'
                    version='1.1'
                    id='Capa_1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 287.403 287.403'
                  >
                    <g>
                      <path
                        d='M197.095,253.646H30V33.757h167.095v12.214l29.767-29.767c-1.214-7.066-7.355-12.447-14.767-12.447H15
c-8.284,0-15,6.716-15,15v249.89c0,8.284,6.716,15,15,15h197.095c8.284,0,15-6.716,15-15V159.041l-30,7.533V253.646z'
                      />
                      <path
                        d='M140.161,73.802c-5.169-6.474-14.605-7.533-21.081-2.366L84.964,98.667L74.647,88.352c-5.857-5.857-15.355-5.857-21.213,0
c-5.858,5.857-5.858,15.355,0,21.213l19.799,19.799c2.912,2.912,6.753,4.394,10.61,4.394c3.296,0,6.604-1.081,9.354-3.276
l44.598-35.598C144.27,89.715,145.329,80.276,140.161,73.802z'
                      />
                      <path
                        d='M119.08,168.366l-34.116,27.232l-10.316-10.316c-5.857-5.859-15.355-5.857-21.213,0s-5.858,15.354,0,21.213l19.799,19.8
c2.912,2.912,6.752,4.394,10.61,4.394c3.296,0,6.604-1.082,9.354-3.276l44.598-35.599c6.475-5.169,7.534-14.606,2.366-21.081
C134.992,164.259,125.556,163.199,119.08,168.366z'
                      />
                      <path
                        d='M276.798,12.959c-2.587,0-5.224,0.96-7.37,3.105l-71.389,71.39c-3.502,3.501-5.988,7.887-7.194,12.69l-7.66,30.506
c-0.358,1.424-0.235,2.96,0.497,4.232c1.021,1.774,2.857,2.765,4.756,2.765c0.444,0,0.891-0.054,1.332-0.165l30.704-7.71
c4.803-1.206,9.189-3.692,12.69-7.194l43.493-43.493c6.881-6.881,10.747-16.214,10.747-25.946V23.51
C287.403,17.163,282.21,12.959,276.798,12.959z'
                      />
                    </g>
                  </svg>
                  <span className='ml-1'>Security</span>
                </a>
                <a href='#' className='mr-3 flex flex-row items-center hover:text-red-600'>
                  <svg className='h-5 w-5 text-red-800' fill='currentColor' viewBox='0 0 32 32'>
                    <path d='M 17.65625 3 C 17.375 2.976563 17.0625 3.03125 16.78125 3.125 C 15.652344 3.503906 15.058594 4.714844 15.4375 5.84375 L 16.34375 8.5 L 11.21875 10.21875 L 10.375 7.65625 C 9.996094 6.527344 8.785156 5.933594 7.65625 6.3125 C 6.523438 6.691406 5.902344 7.902344 6.28125 9.03125 L 7.125 11.5625 L 4.46875 12.46875 C 3.339844 12.847656 2.746094 14.089844 3.125 15.21875 C 3.503906 16.347656 4.714844 16.941406 5.84375 16.5625 L 8.5 15.6875 L 10.21875 20.78125 L 7.65625 21.625 C 6.527344 22.003906 5.933594 23.214844 6.3125 24.34375 C 6.691406 25.476563 7.902344 26.097656 9.03125 25.71875 L 11.5625 24.875 L 12.46875 27.53125 C 12.847656 28.660156 14.089844 29.253906 15.21875 28.875 C 16.347656 28.496094 16.941406 27.285156 16.5625 26.15625 L 15.6875 23.5 L 20.78125 21.78125 L 21.625 24.34375 C 22.003906 25.472656 23.214844 26.066406 24.34375 25.6875 C 25.476563 25.308594 26.097656 24.097656 25.71875 22.96875 L 24.875 20.4375 L 27.53125 19.53125 C 28.660156 19.152344 29.253906 17.910156 28.875 16.78125 C 28.496094 15.652344 27.285156 15.058594 26.15625 15.4375 L 23.5 16.3125 L 21.78125 11.21875 L 24.34375 10.375 C 25.472656 9.996094 26.066406 8.785156 25.6875 7.65625 C 25.308594 6.527344 24.097656 5.902344 22.96875 6.28125 L 20.4375 7.125 L 19.53125 4.46875 C 19.246094 3.621094 18.496094 3.066406 17.65625 3 Z M 17.6875 12.59375 L 19.40625 17.6875 L 14.3125 19.40625 L 12.59375 14.3125 Z' />
                  </svg>
                  <span className='ml-1'>afghanistan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`https://aleteia.org/wp-json/wp/v2/posts`)
  const posts = await res.json()

  const slugs = []
  posts.forEach((post) => {
    slugs.push({ params: { slug: post.slug } })
  })

  return {
    // Only `/pages/1` and `/pages/2` are generated at build time
    paths: slugs,
    // Enable statically generating additional pages
    // For example: `/pages/3`
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  let args = '_embed=true'
  const { slug } = params

  const pageRes = await fetch(`https://aleteia.org/wp-json/wp/v2/posts?${args}&slug=${slug}`)
  const page = await pageRes.json()
  const post = page[0]

  return {
    props: {
      post
    }
  }
}

export default Blog
