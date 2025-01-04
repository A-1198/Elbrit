import './footer.css';

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="details grid grid-3-cols">
        <div className="detail" id="detail-1">
          <figure>
            <img src="/img/telephone.png"/>
          </figure>
          <figcaption>
            <h3>Telephone</h3>
            <p>+975 4245 3346</p>
          </figcaption>
        </div>
        <div className="detail" id="detail-2">
          <figure>
            <img src="/img/mail.png"/>
          </figure>
          <figcaption>
            <h3>Email Address</h3>
            <p>elbriteghr@gmail.com</p>
          </figcaption>
        </div>
        <div className="detail" id="detail-3">
          <figure>
            <img src="/img/location.png"/>
          </figure>
          <figcaption>
            <h3>Office Location</h3>
            <p> Ambassador Street, Zone 61,</p>
          </figcaption>
        </div>
        <div className="detail" id="detail-4">
          <figure>
            <img src="/img/logo.png"/>
          </figure>
        </div>
        <div className="detail" id="detail-5">
            <p>Your health, physical and emotional well-being is important 
to us. We are always by your side and have made it even 
easier for you to find the necessary vitamins.</p>
        </div>
      </div>
      <p className='final'>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
    </div>
   );
}
 
export default Footer;