import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/nav/navbar'
import Layout from '../components/Layout'
import Card from '../components/card'
import { faDumbbell, faComment, faDesktop } from '@fortawesome/free-solid-svg-icons'
import SubscribeForm from '../components/SubscribeForm'


const index = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="min-h-screen flex bg-gray-200 sm:bg-transparent">
        <div className="absolute hidden sm:block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
          <div className="hidden sm:block h-screen top-52 md:top-0 w-screen absolute"style={{zIndex: -2}}>
          <Image
            alt="Background image"
            src="/../public/vacsplash.jpg"
            layout="fill"
            objectFit="cover"
            quality={100} 
          />
          </div>
          <div className="flex flex-col justify-center items-center relative px-6 xl:px-32 z-10 w-screen">
            <h1 className="text-left tracking-tight mt-52 nav2:mt-44">
              <span className="block text-vacblue sm:text-vacgrey font-extrabold uppercase tracking-tighter text-6xl">Special Offer</span>
              <span className="block text-gray-600 sm:text-white font-bold uppercase leading-6 text-2xl">Reduced rates on Group Personal Training</span>
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
      <section className="relative flex md:justify-center">
        <SubscribeForm />
      </section>

      {/* Latest news */}
      <section>

      </section>

    </Layout>
  )
}

export default index
