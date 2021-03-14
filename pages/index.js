import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Card from '../components/card'
import { faDumbbell, faComment, faDesktop } from '@fortawesome/free-solid-svg-icons'
import SubscribeForm from '../components/SubscribeForm'
import Post from '../components/Post'


const index = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="min-h-screen flex bg-gray-200 sm:bg-transparent">
        <div className="absolute hidden sm:block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
          <div className="hidden sm:block h-screen top-52 md:top-0 w-screen absolute"style={{zIndex: -2}}>
          <Image
            alt="Background image"
            src="/vacsplash.jpg"
            layout="fill"
            objectFit="cover"
            quality={100} 
          />
          </div>
          <div className="flex flex-col justify-center items-center relative px-6 xl:px-32 z-10 w-screen">
            <h1 className="text-left tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8">
              <span className="block text-vacblue sm:text-vacgrey font-extrabold uppercase tracking-tighter text-6xl sm:text-7xl med:text-8xl">Special Offer</span>
              <span className="block text-gray-600 sm:text-white font-bold uppercase leading-6 text-2xl sm:text-3xl">Reduced rates on Group Personal Training</span>
              <p className="hidden nav2:block text-2xl text-white max-w-prose mt-4 bg-vacpurple bg-opacity-80 p-4 leading-relaxed">
              Semi-Private Personal Training sessions are available now! Semi-Private Training package options allow you to choose 1 session, 
              2 sessions, or 3 sessions per week. Workout among up to 5 like minded individuals in a fun, safe and supportive environment.  
              Each class is 1 hour in length and covers fundamentals of strength training, mobility, balance, agility and core work. 
              All abilities are welcome with scalable workouts for any level of fitness.
              </p>
            </h1>
            {/* Info Cards */}
            <div className="flex flex-col justify-center lg:flex-row justify-self-center max-w-md md:max-w-max">
              <Card body="We're pleased to now offer online purchasing and scheduling in one convenient location
              on our website  for all of your personal training needs!
              It’s now easier than ever to get the training you need when you need it!" header="Online Booking" icon={faDumbbell} 
              button="Schedule Now"/>
              <Card header="Virtual Training" body="We’ve got you covered with virtual training sessions that will
              ensure you stay strong, healthy and connected to your VAC community from the comfort of your home.
                Up to 4 virtual training sessions are available to book throughout the week for as little as $96 per month!" icon={faDesktop}
                button="learn more"/>
              <Card header="Free Fitness Consultation" icon={faComment} body="If you'd like more in depth information 
              about any of these options or to learn more about the VAC trainers, schedule a Fitness Consultation
              with our Personal Training Director, Erika Anderson
                erika@vashonathleticclub.com" button="Free Consultation"/>
            </div>
        </div>
      </div>
      {/* Subscribe section */}
      <section className="relative flex md:justify-center py-2">
        <SubscribeForm />
      </section>

      {/* Latest news */}
      <section className="bg-vacblue text-white px-8 py-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold text-center mb-4">Latest News</h2>
        <Post />
      </section>

    </Layout>
  )
}

export default index
