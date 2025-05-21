import './CardsFood.css';

const foodItems = [
  {
    id: 1,
    name: "Terminal Pizza",
    imgSrc: "./images/iteration-2-images/pictures/food-1.png",
    rating: 4.1,
    comments: 85,
    price: "60₺",
    className: "terminal"
  },
  {
    id: 2,
    name: "Position Absolute Acı Pizza",
    imgSrc: "./images/iteration-2-images/pictures/food-2.png",
    rating: 4.9,
    comments: 200,
    price: "60₺",
    className: "pizza"
  },
  {
    id: 3,
    name: "useEffect Tavuklu Burger",
    imgSrc: "./images/iteration-2-images/pictures/food-3.png",
    rating: 4.5,
    comments: 120,
    price: "60₺",
    className: "burger"
  }
];

export default function CardsFood() {
  return (
    <section className="card-container">
      {foodItems.map((item) => (
        <div key={item.id} className={item.className}>
          <img src={item.imgSrc} alt={`food-${item.id}`} />
          <p>{item.name}</p>
          <div className="food-details">
            <span className="food-rating">{item.rating} ★</span>
            <span className="food-comments">({item.comments})</span>
            <span className="food-price">{item.price}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
