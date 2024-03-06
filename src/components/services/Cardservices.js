
function Cardservices({nameserv , imgserv}){
    return(
        <div className="col-4">
              <div className="service-box">
                <div className="service-icon">
                  <i className={imgserv}></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{nameserv}</h3>
                  <p className="service-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    adipisci eaque autem fugiat! Quia, provident vitae! Magni
                    tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>

    )
}
export default Cardservices
