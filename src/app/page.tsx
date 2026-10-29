import PriceTrendsSection from "./component/AboutPrice";
import HeroSectionPage from "./component/HeroSection";
import AllProductsSection from "./component/TotalProducts";




export default function Home() {
  return (
   <div>
    <HeroSectionPage/>
    <PriceTrendsSection/>
    <AllProductsSection/>
   </div>
  );
}
