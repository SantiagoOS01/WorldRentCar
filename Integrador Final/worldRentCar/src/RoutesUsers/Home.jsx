import SearchBar from "../Utils/SearchBar";
import ContainerCategories from "../Utils/ContainerCategories";
import CarCards from "../Utils/CarCards";

function Home(){
return(
<section>
  <SearchBar/> 
  <h2 class="h2cat">CATEGOTIAS</h2>
  <ContainerCategories/>
  <div className="Cartas">
    <CarCards/>
    <CarCards/>
    <CarCards/>
    <CarCards/>
  </div>
</section>
)
}
export default Home;