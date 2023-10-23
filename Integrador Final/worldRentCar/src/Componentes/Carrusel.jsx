
export default function Carrusel () {
    return (
        <div>
            
            <div id="carouselExample" className="carousel slide">
            

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://htmlcss3tutorials.com/wp-content/uploads/images/Bootstrap-fullwidth-slider.webp" className="d-block w-90 h-auto" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://w7.pngwing.com/pngs/863/503/png-transparent-volvo-v40-volvo-cars-mid-size-car-carousel-compact-car-sedan-car.png" className="d-block w-90 h-auto" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://htmlcss3tutorials.com/wp-content/uploads/images/Bootstrap-fullwidth-slider.webp" className="d-block w-90 h-auto" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    
    )
}
