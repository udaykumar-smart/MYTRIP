


import React from 'react';
import './Contact.css'

export default function Contact(){
    return (
        <div>
             <h1 className="contact" >Contact Us</h1>
             <div className="card" style={{width: "30rem", marginLeft:"500px", 
                    border:"2px solid skyblue",padding:"10px",}}>
                        <img src="https://www.anandgroupindia.com/wp-content/uploads/2019/05/contactus.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <p style={{color:"black"}} class="card-text">Name: Travels <br/> Contact: 9902121346 <br/> Website: www.travels.com
                            <br/>Email:Contactus@mytrip.com</p>
                        </div>
                    </div>
        </div>
    )
}

