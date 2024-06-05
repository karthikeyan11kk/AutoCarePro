import React from 'react'
import styles from "../style"
import {Navbar,Hero,Stats,Function,CardDeal,Quality,Process,Explore,Contact,Brand,Footer} from "../components/Landingpage/index"


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
        <Explore />
        <Stats/>
        <CardDeal />
        <Process />
        <Contact/>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Home