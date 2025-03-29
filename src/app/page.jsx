import Image from "next/image";
import About from './AboutBlogs/AppleWatch'
import Categories from "./AboutBlogs/Categories";
import GameBlog from "./AboutBlogs/GameBlog";
import LatestProducts from "./AboutBlogs/LatestProducts";
import StarBlogs from "./AboutBlogs/StarBlogs";
import SaleIphone from "./AboutBlogs/SaleIphone";
import EventsBLog from "./AboutBlogs/EventsBLog";
import SaleIpad from "./AboutBlogs/SaleIpad";
import AboutService from "./AboutBlogs/AboutService";

export default function Home() {
  return (
    <div className="">
     <About/>
     <Categories/>
     <GameBlog/>
     <LatestProducts/>
     <SaleIphone/>
     <StarBlogs/>
     <EventsBLog/>
     <SaleIpad/>
     <AboutService/>
    </div>
  );
}
