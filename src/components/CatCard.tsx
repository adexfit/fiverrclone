import { Link } from "react-router-dom";

type CardType = {
  img: string | undefined;
  desc: string;
  title: string;
};

function CatCard({ card }: { card: CardType }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="w-[252px] h-[344px] relative cursor-pointer text-white rounded-[5px]">
        <img src={card.img} className="w-full h-full object-cover" alt="card" />
        <span className=" font-light absolute top-[15px] left-[15px]">
          {card.desc}
        </span>
        <span className="absolute top-[40px] left-[15px] font-medium text-2xl">
          {card.title}
        </span>
      </div>
    </Link>
  );
}
export default CatCard;
