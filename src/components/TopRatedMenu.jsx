import './TopRatedMenu.css'

export default function TopRatedMenus({ cuisines }) {
  return (
    <div className="top-rated-container">
      <p id="emphasis">En çok paketlenen menüler</p>
      <p className="top-rated-main">Acikt@ran Kodlara Doyuran Lezzetler</p>

      <div className="top-rated-buttons-container">
        <button className="top-rated-button">
          <div className="top-rated-button-description">
            <img src="./images/iteration-2-images/icons/1.svg" alt="Ramen"/>
            <p>Ramen</p>
          </div>
        </button>

        <button className="top-rated-button">
          <div className="top-rated-button-description">
            <img src="./images/iteration-2-images/icons/2.svg" alt="Pizza"/>
            <p>Pizza</p>
          </div>
        </button>

        <button className="top-rated-button">
          <div className="top-rated-button-description">
            <img src="./images/iteration-2-images/icons/3.svg" alt="Burger"/>
            <p>Burger</p>
          </div>
        </button>

        <button className="top-rated-button">
          <div className="top-rated-button-description">
            <img src="./images/iteration-2-images/icons/1.svg" alt="Fries"/>
            <p>French Fries</p>
          </div>
        </button>

        <button className="top-rated-button">
          <div className="top-rated-button-description">
            <img src="./images/iteration-2-images/icons/1.svg" alt="Fast Food"/>
            <p>Fast Food</p>
          </div>
        </button>

        <button className="top-rated-button">
          <div className="top-rated-button-description">
            <img src="./images/iteration-2-images/icons/1.svg" alt="Soft Drink"/>
            <p>Soft Drink</p>
          </div>
        </button>
      </div>
    </div>
  );
}
