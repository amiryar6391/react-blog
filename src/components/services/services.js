

import Cardservices from './Cardservices'
import './services.css'

function Services(){
  let subs=[
    {id:1 , nameserv:'WEB DESIGN' , imgserv:'bi bi-briefcase'},
    {id:2 , nameserv:'WEB DEVELOPMENT' , imgserv:'bi bi-card-checklist'},
    {id:3 , nameserv:'PHOTOGRAPHY' , imgserv:'bi bi-bar-chart'},
    {id:4 , nameserv:'RESPONSIVE DESIGN' , imgserv:'bi bi-binoculars'},
    {id:5 , nameserv:'MARKETING SERVICES' , imgserv:'bi bi-calendar4-week'},
    {id:6 , nameserv:'GRAPHIC DESIGN' , imgserv:'bi bi-brightness-high'}
  ]
    return(
        <section id="services">
              <div className="container">
                <div className="section-info">
                  <h2 className="section-title">SERVICES</h2>
                  <p className="section-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="row">
                  
                  
                    {subs.map(sub => <Cardservices key={sub.id} {...sub} />)}
                 

                
                </div>
              </div>
        </section>
  
      

    ) 
}
export default Services
