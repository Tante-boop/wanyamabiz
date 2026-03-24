import React from 'react'

const Footer = () => {
    return (
    <section class="row text-light p-5 mt-4" style={{backgroundColor: "#022d05"}}>
            <div className="col-md-3 mb-3 p-3">
                <h4 className="text-center">About Us</h4>
                <p>WanyamaBiz is a farmer business company that focuses on excellent delivery of our services to our customers.
                </p>
            </div>

            <div className="col-md-3 text-center p-3">
                <h4>Stay Connected</h4>
                <a href="https://www.facebook.com"><img src="/fb.png" alt="Facebook"/></a>
                <a href="https://www.instagram.com"><img src="/in.png" alt="Instagram"/></a>
                <a href="https://www.x.com"><img src="/x.png" alt="X"/></a>

                <p className="mt-3">
                    Contact Us through the various platforms or send it directly over our Contact Us Page. We love to
                    hear opinions from our customers
                </p>

            </div>

            <div className="col-md-3 text-center p-3">
                <h4>Links</h4>
                <a href="https://farmerschoice.co.ke/"> <img src="/farmers.png" alt="" height="50px"/></a>
                <br />
                <br />
                <a href="https://www.animalfeeds.co.ke/"><img src="animal.png" alt="" width="50px"/></a>
                <a href="https://ke.chm-cbd.net/biodiversity"><img src="images/bio.jpeg" alt="" width="100px"/></a>

            </div>

            <div className="col-md-3 mb-3 p-4">
                <h4 className="text-center">Contact Us</h4>
                <form action="">
                    <input type="email" placeholder="Enter your email..." className="form-control" required/>
                    <br/>
                    <textarea name="" id="" cols="30" rows="6" placeholder="Leave a comment..." class="form-control"
                        required></textarea>
                    <br/>
                    <input type="submit" value="Send a Message" class="btn btn-danger"/>
                </form>

            </div>


    </section>
    )
}

export default Footer