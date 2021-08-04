import React from "react";
import Product from "../Product/Product";
import "./Home.css";
import { v4 as uuid_v4 } from "uuid";
function Home() {
  const getId = () => uuid_v4();

  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/AugART21_PC_hero_1x_3days-to-go_FDFO._CB645199309_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={getId()}
            title='ASUS AIO V241, 23.8" FHD, Intel Core i5 11th Gen All-in-One Desktop (8GB/1TB HDD + 256GB SSD/Office 2019/Windows'
            price={64490}
            image="https://m.media-amazon.com/images/I/81kIVjNPGgS._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id={getId()}
            title="HP AlO 11th Gen Intel Core i3 60.5 cm (23.8-inch) FHD All-in-One Desktop (8GB/1TB HDD/M.2 Slot/Windows 10/M"
            price={49490}
            image="https://m.media-amazon.com/images/I/41P2V+ItRWS._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={getId()}
            title="HP All in One PC 20.7-inch(52.6 cm) FHD with Alexa Built-in (Dual Core Intel Celeron J4025/4GB/1TB HDD/Win"
            price={28999}
            image="https://m.media-amazon.com/images/I/6145YEWwdGS._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id={getId()}
            title='ASUS Vivo AiO V222, 21.5" (54.61 cm) FHD, Intel Pentium Gold 6405U, All-in-One Desktop (4GB/1TB HDD/Office'
            price={30490}
            image="https://m.media-amazon.com/images/I/71FTY+OPYLS._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id={getId()}
            title="HP AlO 11th Gen Intel Core i3 60.5 cm (23.8-inch) FHD All-in-One Desktop (8GB/1TB HDD/M.2 Slot/Windows 10/M"
            price={49490}
            image="https://m.media-amazon.com/images/I/41P2V+ItRWS._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={getId()}
            title='ASUS AIO M241, 23.8" FHD, Dual Core AMD Athlon Silver 3050U, All-in-One Desktop (4GB/1TB HDD/Windows 10/Integrated'
            price={28490}
            image="https://m.media-amazon.com/images/I/81nA3fRpvKL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
