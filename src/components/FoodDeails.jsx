import './FoodDeails.css';

const foodCategories = [
  {
    id: 1,
    name: "Yeni Kore",
    icon: "./images/iteration-2-images/icons/1.svg",
    alt: "yeni-kore"
  },
  {
    id: 2,
    name: "Pizza",
    icon: "./images/iteration-2-images/icons/2.svg",
    alt: "pizza"
  },
  {
    id: 3,
    name: "Burger",
    icon: "./images/iteration-2-images/icons/3.svg",
    alt: "burger"
  },
  {
    id: 4,
    name: "Kızartmalar",
    icon: "./images/iteration-2-images/icons/4.svg",
    alt: "Kızartmalar"
  },
  {
    id: 5,
    name: "Fast Food",
    icon: "./images/iteration-2-images/icons/5.svg",
    alt: "fast-food"
  },
  {
    id: 6,
    name: "Gazlı içecek",
    icon: "./images/iteration-2-images/icons/6.svg",
    alt: "Gazlı-içecek"
  }
];

export default function FoodDeails() {
  return (
    <div className="deails">
      {foodCategories.map((category) => (
        <p key={category.id}>
          <img src={category.icon} alt={category.alt} />
          {category.name}
        </p>
      ))}
    </div>
  );
}
