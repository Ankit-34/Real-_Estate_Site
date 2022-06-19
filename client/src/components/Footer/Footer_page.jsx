import React from "react";

const Footer = () => {
    return<>
    <div className='Footer'>
      <div className='box'>
        <div className='upper'>
          <div className='call_us'>
            <i class="bi bi-telephone"></i>
            <div className='call_outer'>
              <p>Call Us</p>
              <p>+91 928-43-56712</p>
            </div>
          </div>
          <div className='mail_us'>
            <i class="bi bi-envelope"></i>
            <div className='mail_outer'>
              <p>Mail Us</p>
              <p>contect.info@gmail.com</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='lower'>
          <section>
            <img src='https://openclipart.org/download/284282/publicdomainq-0009896wneoay.svg' alt=''></img>
            <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            {/* <p className='follow'></p> */}
            <div className='icons'>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-linkedin"></i>
            </div>
          </section>
          <div className='useful_link'>
            <p>Useful Links</p>
            <ul>
              <li>Home</li>
              <li>Properties</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
          <div className='subs'>
            <p className='sub'>Subscribe</p>
            <p className='subs_info'>Don't forgot to subscribe our Newsletter to get any small update about us</p>
            <input type='email' placeholder='E-mail'/>
            <button>Conform</button>
          </div>
        </div>
        {/* <div className='footer_image'>
            <img src='https://media.istockphoto.com/photos/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset-picture-id1283532082?b=1&k=20&m=1283532082&s=170667a&w=0&h=KxQ3cfMs-Xi7FL2TXfrgFbi9pwtBOdjSEc4-ufAeVlo=' alt='home_photo'/>
        </div> */}
      </div>
    </div>
    </>
}

export default Footer;

