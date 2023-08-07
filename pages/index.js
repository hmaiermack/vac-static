import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/Button'
import Card from '../components/card'
import SubscribeForm from '../components/SubscribeForm'
import Post from '../components/Post'
import Iframe from 'react-iframe'


const index = () => {
  // let window = window || global.window
  // const width = window.innerWidth;

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
                    priority={true}
                    objectFit="cover"
                />
                </div>
                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                <h1 className="tracking-tight mt-52 nav2:mt-44 lg:mt-8 mb-8 text-center">
                <div className="block h-28 md:h-60 lg:h-72 xl:h-60"></div>
                {/* <span className="block text-yellow-400 font-extrabold uppercase tracking-tighter text-5xl med:text-8xl leading-none mb-2 md:mb-0">Guided Walkthrough</span> */}
                <span className="block text-white font-extrabold uppercase leading-6 text-3xl med:text-5xl outline">Take a virtual tour of the VAC below!</span>
                </h1>
                </div>
      </div>
       <div className='w-full h-screen flex justify-center mt-8 mb-8'>
        <div className='w-full md:h-5/6'>
        <Iframe 
          url="https://my.matterport.com/show/?m=iZgBQnjcUW3"
          width="100%"
          height='100%'
          frameBorder={0}
          allowFullScreen={true}
          allow='xr-spatial-tracking'
        />
        </div>
       </div>
        <div className=" text-center w-screen bg-white p-16 z-10">
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">Do you want help with your workout routine and fitness goals?</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed">
                If you are new or returning to exercise a personal trainer can show you
                    where to begin by providing guidance, motivation, encouragement and personal attention to help you reach your goals. At the Vashon Athletic Club our 
                    trainers can help you stay on top of your health by building an individualized program tailored to your specific needs and goals. 
                    Whether you have a medical condition, 
                    injury or need sport-specific training we are here to guide you in the right direction.
                </p>
        </div>

        <div className=" bg-gray-200 flex flex-col justify-center lg:flex-row lg:justify-center justify-self-center p-10">
          {/* <Card body="The Semi-Private Training structure allows you more flexible training time options and access to 
              multiple trainers. You can schedule different trainers and different session times whenever you want! Semi-Private 
              Training package options allow you to choose between 1, 2, or 3 sessions per week. Ranging from $29 to $35 per session, 
              Semi-Private Training is the most cost effective approach to personal training." header="Online Booking" icon="dumbbell" 
              button="Schedule Now" link="https://vacpersonalfitnesstraining.as.me/schedule.php"/> */}
          <Card header="Free Fitness Consultation" icon="comment" body="If you would like more in depth information about any of our Personal Training 
              options or to learn more about the VAC trainers, schedule a Fitness Consultation with one of our personal trainers today!" button="Free Consultation" link="https://vacpersonalfitnesstraining.as.me/vacfreefitnessconsultation"
                />

        </div>


      {/* Subscribe section ---! Waiting on affiliate link*/}
      
      {/* <section className="relative flex md:justify-center py-8">
        <SubscribeForm />
      </section> */}

      <section className="bg-gray-200">
          <section className="w-11/12 md:w-6/12 mx-auto p-8">
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
