import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Angebote from "../components/angebote"
import Team from "../components/team"

const IndexPage = () => (
  <Layout>
    <SEO title="Bella Kosmetik" />


    <div id="Leistungen">
      <Angebote></Angebote>
    </div>

    <div className="row">
      <div className="col-6">
      <div className="container">
        <h1 id="Offnungszeiten">Öffnungszeiten</h1>
       
        <div className="row">
          <div className="col-5">
            <p>
            <strong>Dienstag bis Freitag </strong> <br/> 
            10:00 bis 13:00 Uhr <br/>
            14:30 bis 18:00 Uhr <br/>
            </p>
          </div>
          <div className="col-7">
            <p>
            <strong>Samstag </strong> <br/>
            09:00 bis 13:00 Uhr <br/>
            letzten Samstag im Monat geschlossen
            </p>
          </div>
        </div>
      </div>
      </div>
    
      <div className="col-6">
      <div className="container">

        <h1 id="Kontakt">Kontakt </h1> 
        <div className="row">
          <div className="col-5">
            <p>
              Bella Kosmetik <br/>
              Kornstraße 116 <br/>
              28201 Bremen <br/> <br/>
            </p>
          </div>
          <div className="col-7">
            <p>
              Tel: 0421 51700573 <br/>
              Mail: bellakosmetik.bremen@gmail.com <br/>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div> 

    {/* <div>
    <Team></Team>
    </div> */}

  
  </Layout>
)

export default IndexPage
