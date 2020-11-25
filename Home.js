import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import React from 'react';

export default function Home(){
    return (
        <div >
            <h1 className=" text-danger text-center text-capitalize m-6 p-6">Welcome to MyTrip</h1>
            <div className="container">
                <div className="row">


                    <div className="col-md">
                         <div className="card" >
                            <img height="220px" src="https://th.bing.com/th/id/OIP.saTUDZX6PJ46XHFn2l5UKgHaFm?pid=Api&rs=1" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title ">Araku Trip</h3>
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                         <div className="card" >
                            <img height="220px" src="https://media0.mensxp.com/media/content/2017/Dec/header-image-wikimedia-1514207963_1100x513.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Bengaluru Trip</h3>
                                
                               
                            </div>
                        </div>
                    </div>


                    <div className="col-md">
                         <div className="card" >
                            <img height="220px" src="https://www.weekendthrill.com/wp-content/uploads/2017/02/Goa_Trip_4.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Goa Trip</h3>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md">
                         <div className="card" >
                            <img height="220px" src="https://th.bing.com/th/id/OIP.1DyK1r7OH_EMKQTc_3UNMwHaEO?pid=Api&rs=1" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Ooty Trip</h3>
                               
                            </div>
                        </div>
                    </div>


                    
                </div>



                {/* 2nd row */}

                <div className="row">
                     <div className="col-md">
                                <div className="card" >
                                    <img height="220px" src="https://www.visittnt.com/blog/wp-content/uploads/2016/06/varanasi-featured.jpg" className="card-img-top" alt="..."/>
                              <div className="card-body">
                            <h3 className="card-title ">Varanasi Trip</h3>
                            
                                 </div>
                            </div>
                    </div>

                    <div className="col-md">
                    <div className="card" >
                        <img height="220px" src="https://i2.wp.com/oneday.tours/wp-content/uploads/one-day-mysore-local-sightseeing-tour-package-private-cab-header.jpg?resize=1200%2C640&ssl=1" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title">Mysore Trip</h3>
                            
                           
                        </div>
                    </div>
                    </div>

                    <div className="col-md">
                         <div className="card" >
                            <img height="220px" src="https://images.thrillophilia.com/image/upload/s--N01Hvvvz--/c_fill,f_auto,fl_strip_profile,h_800,q_auto,w_1300/v1/images/photos/000/011/505/original/m_Image7-Flickr-Karthik_Narayana.jpg.jpg?1458194138" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Dandeli Trip</h3>
                               
                            </div>
                        </div>
                    </div>

                 <div className="col-md">
                    <div className="card" >
                        <img height="220px" src="https://cdn.theculturetrip.com/wp-content/uploads/2017/11/hemakuta-hampi.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title">Hampi Trip</h3>
                           
                        </div>
                    </div>
                 </div>



                </div>


 

            </div>
        </div>
    )
}