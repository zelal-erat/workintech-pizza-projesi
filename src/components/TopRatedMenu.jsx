import './TopRatedMenu.css';

export default function TopRatedMenus() {
  const menuItems = [
    { id: 1, name: 'Ramen', imgSrc: './images/iteration-2-images/icons/1.svg' },
    { id: 2, name: 'Pizza', imgSrc: './images/iteration-2-images/icons/2.svg' },
    { id: 3, name: 'Burger', imgSrc: './images/iteration-2-images/icons/3.svg' },
    { id: 4, name: 'French Fries', imgSrc: './images/iteration-2-images/icons/1.svg' },
    { id: 5, name: 'Fast Food', imgSrc: './images/iteration-2-images/icons/1.svg' },
    { id: 6, name: 'Soft Drink', imgSrc: './images/iteration-2-images/icons/1.svg' },
  ];

  return (
    <div className="top-rated-container">
      <p id="emphasis">en çok paketlenen menüler</p>
      <p className="top-rated-main">Acıktıran Kodlara Doyuran Lezzetler</p>

      <div className="top-rated-buttons-container">
        {menuItems.map(item => (
          <button key={item.id} className="top-rated-button">
            <div className="top-rated-button-description">
              <img src={item.imgSrc} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
