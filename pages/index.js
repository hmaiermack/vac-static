import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/Button'
import Card from '../components/card'
import SubscribeForm from '../components/SubscribeForm'
import Post from '../components/Post'


const index = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="h-screen flex">
                <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
                <div className="h-screen w-screen absolute"style={{zIndex: -2}}>
                <Image
                    alt="Background image"
                    src="/vacsplash.jpg"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                </div>
                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 text-center">
                <span className="block text-white font-extrabold uppercase tracking-tighter text-5xl med:text-8xl leading-none mb-2 md:mb-0">Special Offer</span>
                <span className="block text-vacblue lg:text-vacgrey font-extrabold uppercase leading-6 text-3xl med:text-5xl">Reduced rates on group personal training</span>
                </h1>
                </div>
        </div>
        <div className=" text-center w-screen bg-white p-16 z-10">
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">Do you want help with your workout routine and fitness goals?</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed">
                Semi-Private Personal Training sessions are available now! Semi-Private Training package options allow you to choose 1 session, 
                2 sessions, or 3 sessions per week. Workout among up to 5 like minded individuals in a fun, safe and supportive environment. 
                Each class is 1 hour in length and covers fundamentals of strength training, mobility, balance, agility and core work. All abilities 
                are welcome with scalable workouts for any level of fitness.
                </p>
        </div>

        <div className=" bg-gray-200 flex flex-col justify-center lg:flex-row justify-self-center p-10">
        <Card body="We're pleased to now offer online purchasing and scheduling in one convenient location
              on our website  for all of your personal training needs!
              It’s now easier than ever to get the training you need when you need it!" header="Online Booking" icon="dumbbell" 
              button="Schedule Now"/>
              <Card header="Virtual Training" body="We’ve got you covered with virtual training sessions that will
              ensure you stay strong, healthy and connected to your VAC community from the comfort of your home.
                Up to 4 virtual training sessions are available to book throughout the week for as little as $96 per month!" icon="desktop"
                button="learn more"/>
              <Card header="Free Fitness Consultation" icon="address-book" body="If you'd like more in depth information 
              about any of these options or to learn more about the VAC trainers, schedule a Fitness Consultation
              with our Personal Training Director, Erika Anderson
                erika@vashonathleticclub.com" button="Free Consultation"/>

        </div>


      {/* Subscribe section */}
      <section className="relative flex md:justify-center py-8">
        <SubscribeForm />
      </section>

      <section className="bg-gray-200">
          <section className="w-6/12 mx-auto p-8">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe src="https://cdn.lightwidget.com/widgets/fd1b2d157cc85fef9761e5e29a484ced.html" scrolling="no" allowtransparency="true" 
        className="lightwidget-widget" style={{width: '100%', border: 0, overflow: 'hidden'}}></iframe>
        </section>
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
