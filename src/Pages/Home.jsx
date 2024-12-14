import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import delivery from '../Images/delivery.png'
import customised from '../Images/customised.png'
import arrival from '../Images/newArrival.png'
import bouquet from '../Images/bouquet.png'
import gifts from '../Images/gifts.png'
import orders from '../Images/orders.png'



function Home() {
  return (
    <div className='home'>
      <Navbar />
     <section className='nav2'>
<div className='card'>
<img src={delivery} alt='delivery' className='delivery'/>
<h5> Fast Delivery</h5>
</div>
<div className='card'>
<img src={customised} alt='customised' className='customised'/>
<h5>Customised Crafts</h5>
</div>
<div className='card'>
<img src={arrival} alt='arrival' className='arrival'/>
<h5>New Arrivals</h5>
</div>
<div className='card'>
<img src={bouquet} alt='bouquet' className='bouquet'/>
<h5>Bouquet</h5>
</div>
<div className='card'>
<img src={gifts} alt='gifts' className='gifts'/>
<h5>Gifts</h5>
</div>
<div className='card'>
<img src={orders} alt='orders' className='orders'/>
<h5>Bulk Orders</h5>
</div>
     </section>


     <section className='card_container'>
     <div className='box_card'>
     <div className='box'>
     </div>
<p className='name'> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>

</div>

<div className='box_card'>
     <div className='box'>
     </div>
<p> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>
</div>

<div className='box_card'>
     <div className='box'>
     </div>
<p> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>
</div>

<div className='box_card'>
     <div className='box'>
     </div>
<p> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>
</div>
   

     </section>
     <section className='card_container'>
     <div className='box_card'>
     <div className='box'>
     </div>
<p> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>
</div>

<div className='box_card'>
     <div className='box'>
     </div>
<p> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>
</div>

<div className='box_card'>
     <div className='box'>
     </div>
<p> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>
</div>

<div className='box_card'>
     <div className='box'>
     </div>
<p> Customised Resin Art</p>
<p>Rs.0.00</p>
<div className='star'>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-solid fa-star fa-2xs" style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs"  style={{color: "#ffffff",}}></i>
<i class="fa-regular fa-star fa-2xs" style={{color: "#ffffff",}}></i>
</div>
</div>
   

     </section>
    </div>
  )
}

export default Home
