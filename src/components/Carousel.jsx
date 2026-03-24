import React from 'react'

const Carousel = () => {
    return (
        <section className="row g-0">
            <div className="col-12">
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        {/*-- Slide 1 --*/}
                        <div className="carousel-item active position-relative">
                            <img src="/slide1.jpg" className="w-100" height="700px" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column
                                    justify-content-center align-items-center text-white"
                                style={{background: "rgba(0,0,0,0.4)"}}>
                                <h1>WanyamaBiz</h1>
                                <p>At your service🫡</p>
                            </div>
                        </div>

                        {/*-- Slide 2 --*/}
                        <div className="carousel-item position-relative">
                            <img src="/slide2.jpg" className="w-100" height="700px" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column
                                    justify-content-center align-items-center text-white"
                                style={{background: "rgba(0,0,0,0.4)"}}>
                                <h1>Buy now or the animals will MOO-VE On.. get it?</h1>
                                <p>MOO goes the cow... not funny... ill shut up... but the sales wont.. buy them Below😃</p>
                            </div>
                        </div>

                        {/*!-- Slide 3 --*/}
                        <div className="carousel-item position-relative">
                            <img src="/slide3.jpg" className="w-100" height="700px" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column
                                    justify-content-center align-items-center text-white"
                                style={{background: "rgba(0,0,0,0.4)"}}>
                                <h1>Buy Animals</h1>
                                <p>Scroll Below😃</p>
                            </div>
                        </div>

                        {/*-- Slide 4 --*/}
                        <div className="carousel-item position-relative">
                            <img src="/slide4.jpg" className="w-100" height="700px" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column
                                    justify-content-center align-items-center text-white"
                                style={{background:"rgba(0, 0, 0, 0.4)"}}>
                                <h1>Dont Miss Out On The Deals😎</h1>
                                <p>I know you want to buy some😏</p>
                            </div>
                        </div>

                    </div>

                    <a href="#carousel" data-bs-slide="prev" className="carousel-control-prev">
                        <span className="carousel-control-prev-icon bg-dark p-3 rounded-circle"></span>
                    </a>
                    <a href="#carousel" data-bs-slide="next" className="carousel-control-next">
                        <span className="carousel-control-next-icon bg-dark p-3 rounded-circle"></span>
                    </a>
                </div>
            </div>
        </section >

    )
}

export default Carousel