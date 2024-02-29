import Image from "next/image";
const Homepage = () => {
  return (
  <div className="h-full">
    {/* ---Image Container--- */}
    <div className="h-1/2 relative">
      <Image src="/hero.png" fill/>
    </div>
    <div className="flex flex-col">
         <p>Crafting Digital Experiences , Designing Tommorow</p>

    </div>
  </div>);
};

export default Homepage;
