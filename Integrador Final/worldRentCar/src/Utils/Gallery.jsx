import CarCards from "./CarCards";


function Gallery(){
return(
   <section className="gallery">
      <h2>GALERIA</h2>
      <div className="gallery-container">
      <CarCards/>
      <CarCards/>
      <CarCards/>
      <CarCards/>
      <CarCards/>
      <CarCards/>
      </div>
   </section>
)
}
export default Gallery;