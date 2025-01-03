
import './CardsFood.css'
export default function CardsFood(){
    return(
            <section className="card-container">
                <div className="terminal">
                    <img src="./images/iteration-2-images/pictures/food-1.png" alt="food-1" />
                <p>Terminal Pizza</p>
                <div className="food-details">
          <span className="food-rating"> 4.1 ★</span>
          <span className="food-comments">(85)</span>
          <span className="food-price">60₺</span>
        </div>
                
                </div>
            
                <div className="pizza">
                    <img src="./images/iteration-2-images/pictures/food-2.png" alt="food-2" />
                <p>Position Absolute Acı Pizza</p>
                <div className="food-details">
          <span className="food-rating">4.9 ★</span>
          <span className="food-comments"> (200)</span>
          <span className="food-price">60₺</span>
        </div>
                </div>
            
                <div className="burger">
                    <img src="./images/iteration-2-images/pictures/food-3.png" alt="food-3" />
                <p>useEffect Tavuklu Burger</p>
                <div className="food-details">
          <span className="food-rating"> 4.5 ★</span>
          <span className="food-comments">(120)</span>
          <span className="food-price">60₺</span>
        </div>
                </div>
            </section>
    )
}