import { Button } from "reactstrap";
import './Kart.css'

export default function Kart() {
  return (
    <div className="kart-container">
      <div className="özel">
        <img src="./images/iteration-2-images/cta/kart-1.png" alt="Özel Lezzetus" />
        <h3>ÖZEL LEZZETUS</h3>
        <p>Position: Absolute Acı Burger</p>
        <Button className="kart-button">SiPARiŞ VER</Button>
      </div>
      <div className="container-2">
      <div className="menü-burger">
        <img src="./images/iteration-2-images/cta/kart-2.png" alt="Hackathlon Burger Menü" />
        <h3>Hackathlon Burger Menü</h3>
        <Button className="kart-button">SiPARiŞ VER</Button>
      </div>
      <div className="hizli">
        <img src="./images/iteration-2-images/cta/kart-3.png" alt="Çok Hızlı NPM Gibi Kurye" />
        <h3>Çooook hızlı npm gibi kurye</h3>
        <Button className="kart-button">SiPARiŞ VER</Button>
      </div>
      </div>
    </div>
  );
}
