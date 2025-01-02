import './Footer.css'
export default function Footer (){
    return(
       <div className="footer">
        <div className=" footer-contact">
        <h1>Teknolojik Yemekler</h1>
        <p>
            <img src="./images/iteration-2-images/footer/icons/icon-1.png" alt="konum" />
            341 Londonderyy Road, İstanbul Türkiye
        </p>
        <p>
            <img src="./images/iteration-2-images/footer/icons/icon-2.png" alt="mail" />
            aciktim@teknolojikyemekler.com
        </p>
        <p>
            <img src="./images/iteration-2-images/footer/icons/icon-3.png" alt="phone" />
            +90 216 123 45 67
        </p>
        </div>
        <div className=" hot-menu">
            <h2>Hot Menü</h2>
            <p>Terminal pizza</p>
            <p>5 Kişilik Hackhatlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
        </div>
        <div className="instagram">
            <h2>İnstagram</h2>
        <img src="./images/iteration-2-images/footer/insta/li-0.png" alt="insta-0" />
        <img src="./images/iteration-2-images/footer/insta/li-1.png" alt="insta-1" />
        <img src="./images/iteration-2-images/footer/insta/li-2.png" alt="insta-2" />
        <img src="./images/iteration-2-images/footer/insta/li-3.png" alt="insta-3" />
        <img src="./images/iteration-2-images/footer/insta/li-4.png" alt="insta-4" />
        <img src="./images/iteration-2-images/footer/insta/li-5.png" alt="insta-5" />

        </div>


       </div>
    )
}