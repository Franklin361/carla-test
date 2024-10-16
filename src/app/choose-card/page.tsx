import CardList from "@/components/choose-card/card-list";
import FixedBottomNav from "@/components/choose-card/fixed-bottom-nav";
import TopBarActions from "@/components/choose-card/top-bar-actions";
import {cards} from "@/constants/credit-cards";

function ChooseCardPage() {
  return (
    <>
      <TopBarActions />

      <main className="my-2 mb-20">
        <CardList cards={cards} />
      </main>

      <FixedBottomNav />
    </>
  );
}

export default ChooseCardPage;
