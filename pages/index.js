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
                <span className="block text-vacblue font-extrabold uppercase tracking-tighter text-5xl med:text-8xl leading-none mb-2 md:mb-0">Special Offer</span>
                <span className="block text-white font-extrabold uppercase leading-6 text-3xl med:text-5xl">REDUCED RATES ON SEMI-PRIVATE TRAINING</span>
                </h1>
                </div>
        </div>
        <div className=" text-center w-screen bg-white p-16 z-10">
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">STRUCTURED AND GUIDED WORKOUTS ON A FLEXIBLE SCHEDULE</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed">
                Exercise with up to 4 other individuals under the guidance of a personal trainer in a fun, safe, and supportive environment. 
                All abilities are welcome with scalable workouts for any level of fitness; however, a basic level of physical ability and mobility is 
                necessary. Each session is 1 hour in length and takes place in our bright and spacious Functional Training Center. Sessions utilize various 
                types of exercises, equipment, and workout routines. Elements of strength, endurance, cardio, mobility, balance, agility, and/or core 
                training may be included in any class
                </p>
        </div>

        <div className=" bg-gray-200 flex flex-col justify-center lg:flex-row lg:justify-center justify-self-center p-10">
          <Card body="The Semi-Private Training structure allows you more flexible training time options and access to 
              multiple trainers. You can schedule different trainers and different session times whenever you want! Semi-Private 
              Training package options allow you to choose between 1, 2, or 3 sessions per week. Ranging from $29 to $35 per session, 
              Semi-Private Training is the most cost effective approach to personal training." header="Online Booking" icon="dumbbell" 
              button="Schedule Now" link="https://vacpersonalfitnesstraining.as.me/schedule.php"/>
          <Card header="Free Fitness Consultation" icon="comment" body="If you would like more in depth information about any of our Personal Training 
              options or to learn more about the VAC trainers, schedule a Fitness Consultation with our Personal Training Director, 
              Travis Tuchak, travis@vashonathleticclub.com" button="Free Consultation" link="https://vacpersonalfitnesstraining.as.me/vacfreefitnessconsultation"
                />

        </div>


      {/* Subscribe section ---! Waiting on affiliate link*/}
      
      {/* <section className="relative flex md:justify-center py-8">
        <SubscribeForm />
      </section> */}

      <section className="bg-gray-200">
          <section className="w-6/12 mx-auto p-8">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe src="https://cdn.lightwidget.com/widgets/fd1b2d157cc85fef9761e5e29a484ced.html" scrolling="no" allowtransparency="true" 
        className="lightwidget-widget" style={{width: '100%', border: 0, overflow: 'hidden'}}></iframe>
        </section>
      </section>

      {/* Latest news ---! Do we really want to do this?*/}
      {/* <section className="bg-vacblue text-white px-8 py-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold text-center mb-4">Latest News</h2>
        <Post />
      </section> */}

    </Layout>
  )
}

export default index
