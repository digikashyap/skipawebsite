import UserHeader from "../layouts/UserHeader";
import HeroSlider from "../pages/HeroSlider";

import ArticleSlider from "../pages/ArticleSlider";
import UserFooter from "../layouts/UserFooter";

function Home() {
  return (
    <>
        <UserHeader />
        <ArticleSlider />
   
            <HeroSlider />
        <UserFooter />
    </>
    
  );
}

export default Home;
