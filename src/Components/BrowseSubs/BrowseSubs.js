import Header from "../Header";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SortByButton from "../SortByButton/SortByButton";
import SubCard from "../SubCard/SubCard";
import './BrowseSubs.css'

const BrowseSubs = () => {
  return (
    <div>
      <Header />
       <SidebarMenu/>
       <SortByButton/>
      <div className="browseBG">
        <SubCard />
        <SubCard />
        <SubCard />
        <SubCard />
      </div>
     
    </div>
  );
};

export default BrowseSubs;
