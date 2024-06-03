import React from 'react'
import styles from "../style"
import {Navbar,Hero,Stats,Function,CardDeal,Quality,Species,Exists,Map,Testimonials,Footer} from "../components/Landingpage/index"


export const Home = () => {
  return (
    <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Function />
        <Quality />
        <Exists />
        <Map/>
        <Stats/>
        <CardDeal />
        <Testimonials />
        <Species />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Home