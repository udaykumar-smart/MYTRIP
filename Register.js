import React from 'react';

export default function Register(){
    return (

        // <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        //     <form>
        //         <div className="form-group text-left">
        //         <label htmlFor="exampleInputEmail1">Email address</label>
        //         <input type="email" 
        //                className="form-control" 
        //                id="email" 
        //                aria-describedby="emailHelp" 
        //                placeholder="Enter email"
        //         />
               
        //         </div>
        //         <div className="form-group text-left">
        //             <label htmlFor="exampleInputPassword1">Password</label>
        //             <input type="password" 
        //                 className="form-control" 
        //                 id="password" 
        //                 placeholder="Password"
        //             />
        //         </div>
               
        //         <button 
        //             type="submit" 
        //             className="btn btn-primary"
        //         >
        //             Register
        //         </button>
                
        //     </form>
        // </div>


    //     <div>
    //         <form >
                
    //         <label> Name:
    //             <input type="text"  />
    //         </label> <br/>

    //         <label> Email:
    //             <input type="email"  />
    //         </label> <br/>

    //         <label> Phone No :
    //             <input type="text"  />
    //         </label> <br/>

    //         <label> Password:
    //             <input type="password"  />
    //         </label> <br/>
    //             <label>
    //                 Address :
    //                     <textarea />
    //             </label> <br/>

    //                 <label>
    //                 Select your favorite Place:
    //                 <select >
    //                     <option value="araku">Araku</option>
    //                     <option value="bengaluru">Bengaluru</option>
    //                     <option value="goa">Goa</option>
    //                     <option value="varanasi">Varanasi</option>
    //                     <option value="mysore">Mysore</option>
    //                     <option value="trivandrum">Trivandrum</option>
    //                 </select>
    //                 </label> <br/>
    //     <input type="submit" value="Submit" />
    //   </form>
    //     </div>
   
   
    
            <div>
                <h1 className="reg">Registration Page</h1>
                 <form action="success.html" name="form1" onsubmit="return validateForm()">
                <div class="col-sm-10">
                    <label for="name" id="name" className="col-sm-10 col-form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Full name" name="name1" />
                </div>
                <div class="form-group ">
                    <label for="inputEmail3" className="col-sm-10 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" className="form-control" id="inputEmail3" placeholder="Enter E-mail" name="email1"/>
                    </div>
                </div>
                <div class="col">
                    <label for="name" className="col-sm-10 col-form-label">Phone Number:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Phone Number" name="name1" />
                </div>
                <div class="form-group ">
                  <label for="inputEmail3" className="col-sm-10 col-form-label">Password</label>
                  <div class="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="psw1"/>
                  </div>
                </div>
                    
                <div className="form-check form-check-inline">
                <label>Gender:</label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                    <label classname="form-check-label" for="inlineRadio3">Others</label>
                </div>
                <div classname="form-group1">
                     <label for="exampleFormControlTextarea1">Address:</label>
                     <textarea name="ta" class="form-control" id="exampleFormControlTextarea1" rows="6">Write Here:</textarea>
                </div>
                <div classname="form-group col-md-10">
                        <label for="inputState">Favoruite Place:</label>
                        <select id="inputState" class="form-control">
                          <option selected>Selecte Place...</option>
                          <option value="">Tirupathi</option>
                          <option value="">Goa</option>
                          <option value="">Kulumanali</option>
                          <option value="">Andaman Nikobar</option>
                          <option value="">Charminar</option>
                          <option value="">Udaipur</option>
                          <option value="">Hampi</option>
                          <option value="">Delhi</option>
                          <option value="">Varanasi</option>
                          
                     </select>
                </div>
                <div classname="col-auto my-1">
                        <button type="submit" class="btn btn-dark">Submit</button>
                      </div>
                
                </form>
            </div>
        
    
    
    )
}





// <title>Register Page</title>
// <link rel="stylesheet" href="form-style.css">
// <script>
// // Defining a function to display error message
// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

// // Defining a function to validate form 
// function validateForm() {
//     // Retrieving the values of form elements 
//     var name = document.contactForm.name.value;
//     var email = document.contactForm.email.value;
//     var mobile = document.contactForm.mobile.value;
//     var country = document.contactForm.country.value;
//     var gender = document.contactForm.gender.value;
//     var hobbies = [];
//     var checkboxes = document.getElementsByName("hobbies[]");
//     for(var i=0; i < checkboxes.length; i++) {
//         if(checkboxes[i].checked) {
//             // Populate hobbies array with selected values
//             hobbies.push(checkboxes[i].value);
//         }
//     }
    
// 	// Defining error variables with a default value
//     var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
//     // Validate name
//     if(name == "") {
//         printError("nameErr", "Please enter your name");
//     } else {
//         var regex = /^[a-zA-Z\s]+$/;                        
//         if(regex.test(name) === false) {
//             printError("nameErr", "Please enter a valid name");
//         } else {
//             printError("nameErr", "");
//             nameErr = false;
//         }
//     }
    
//     // Validate email address
//     if(email == "") {
//         printError("emailErr", "Please enter your email address");
//     } else {
//         // Regular expression for basic email validation
//         var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(regex.test(email) === false) {
//             printError("emailErr", "Please enter a valid email address");
//         } else{
//             printError("emailErr", "");
//             emailErr = false;
//         }
//     }
    
//     // Validate mobile number
//     if(mobile == "") {
//         printError("mobileErr", "Please enter your mobile number");
//     } else {
//         var regex = /^[1-9]\d{9}$/;
//         if(regex.test(mobile) === false) {
//             printError("mobileErr", "Please enter a valid 10 digit mobile number");
//         } else{
//             printError("mobileErr", "");
//             mobileErr = false;
//         }
//     }
    
//     // Validate country
//     if(country == "Select") {
//         printError("countryErr", "Please select your country");
//     } else {
//         printError("countryErr", "");
//         countryErr = false;
//     }
    
//     // Validate gender
//     if(gender == "") {
//         printError("genderErr", "Please select your gender");
//     } else {
//         printError("genderErr", "");
//         genderErr = false;
//     }
    
//     // Prevent the form from being submitted if there are any errors
//     if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
//        return false;
//     } else {
//         // Creating a string from input data for preview
//         var dataPreview = "You've entered the following details: \n" +
//                           "Full Name: " + name + "\n" +
//                           "Email Address: " + email + "\n" +
//                           "Mobile Number: " + mobile + "\n" +
//                           "Country: " + country + "\n" +
//                           "Gender: " + gender + "\n";
//         if(hobbies.length) {
//             dataPreview += "Hobbies: " + hobbies.join(", ");
//         }
//         // Display input data in a dialog box before submitting the form
//         alert(dataPreview);
//     }
// };
// </script>
// 
// <form name="contactForm" onsubmit="return validateForm()" action="/examples/actions/confirmation.php" method="post">
//     <h2>Application Form</h2>
//     <div class="row">
//         <label>Full Name</label>
//         <input type="text" name="name" required>
//         <div class="error" id="nameErr"></div>
//     </div>
//     <div class="row">
//         <label>Email Address</label>
//         <input type="text" name="email" required>
//         <div class="error" id="emailErr"></div>
//     </div>
  
//     <div class="row">
//         <label>Mobile Number</label>
//         <input type="text" name="mobile" maxlength="10" required>
//         <div class="error" id="mobileErr"></div>
//     </div>
  
//   <div class="row">
//         <label>State</label>
//         <select name="country" required>
//                 <option value="">select</option>
//                 <option >Andhra Pradesh</option>
//                 <option >Kerala</option>
//                 <option >Karnataka</option>
//                 <option >Telangana</option>
//                 <option >Tamil Nadu</option>
//             </select>
//         </select>
//         <div class="error" id="countryErr"></div>
//     </div>
//     <div class="row">
//         <label>Gender</label>
//         <div class="form-inline">
//             <label><input type="radio" name="gender" value="male" required> Male</label>
//             <label><input type="radio" name="gender" value="female" required> Female</label>
//             <label><input type="radio" name="gender" value="others" required> Others</label>

//         </div>
//         <div class="error" id="genderErr"></div>
//     </div>
//     
//     </div>
//     <div class="row">
//         <label>Address</label>
//         <div class="form-inline">    
//         <textarea name="address" name="address" cols="34" rows="5" maxlength="200s" required></textarea></>
//         </div>
//     </div>
//     <div class="row">
//         <input type="submit" value="Register">
//     </div>
// </form>
