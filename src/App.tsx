import { ExploreGhana } from "./components/CategoryMedia/ExploreGhana";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { HiddenGemsSection } from "./components/HiddenGemsSection";
import { EventCategoryList } from "./components/EventCategory/EventCategoryList";
import { ExclusiveSection } from "./components/ExclusiveSection";
import { GlobalHighlightsSection } from "./components/GlobalHighlightsSection";
import { BuzzingDestinations } from "./components/BuzzingDestinations";
import { Footer } from "./components/Footer";
import { BlazingDeals } from "./components/BlazingDeals/BlazingDeals";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Header />
      <main className="mx-[40px] my-[10px]">
        <HeroSection />
        <EventCategoryList title={`Tonight's Spotlight`} />
        <EventCategoryList title="Hot This Week" />
        <EventCategoryList title="Unmissable" />
        <ExclusiveSection />
        <EventCategoryList title="For you" hasShadow hasRating />
        <BuzzingDestinations />
        <BlazingDeals />
        <HiddenGemsSection />
        <div className="bg-[#FAF8ED] px-[40px] mx-[-40px]">
          <ExploreGhana />
          <EventCategoryList title="Ghana’s Top 10s" />
        </div>
        <GlobalHighlightsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
