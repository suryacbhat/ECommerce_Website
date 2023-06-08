import React from 'react'
import Layout from '../componentss/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About-us GPS"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Hello and welcome to Gaming Product Store,
          the place to find the best Sport Gadgets for every game and occasion.
          We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best
          quality product.
          We at GPS believe in high quality and exceptional customer service.
          But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices,
          and ship them to you regardless of where you are located.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
