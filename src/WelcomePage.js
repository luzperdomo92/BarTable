import React from 'react'
import Form from './components/Form';

const WelcomePage = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative text-center text-lg-start">
        <div className="row">
          <div className="col-lg-8">
            <h1>What <span>Cocktail</span> Would you like drink today ?</h1>
            <div className="py-5">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WelcomePage;
