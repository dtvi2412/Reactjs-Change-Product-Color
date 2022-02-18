import { useState } from 'react';
import './App.css';

//Data
const dataCars = [
  {
    id: 1,
    name: 'BMW',
    colors: ['#A1E52C', '#01B8E5', '#C92C49'],
    checkImg: {
      '#A1E52C': true,
      '#01B8E5': false,
      '#C92C49': false,
    },

    linkImg: {
      '#A1E52C':
        'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2018/bmw-m-colours-vol-6/bmw-m5-java-green-thumbnail.jpg',

      '#01B8E5':
        'https://xehay.vn/uploads/images/2018/5/01/xehay-bmw-m760li-santorini-blue-040518-2.jpg',

      '#C92C49': 'https://bmwclub.vn/attachments/50450/',
    },
  },
  {
    id: 2,
    name: 'Lamborghini',
    colors: ['#A1E52C', '#01B8E5', '#C92C49'],
    checkImg: {
      '#A1E52C': true,
      '#01B8E5': false,
      '#C92C49': false,
    },

    linkImg: {
      '#C92C49': 'https://i.ytimg.com/vi/WOUOzu14mn0/maxresdefault.jpg',
      '#01B8E5':
        'https://tophinhanhdep.com/wp-content/uploads/2021/11/Blue-Lamborghini-Aventador-Wallpapers.jpg',
      '#A1E52C':
        'https://vnn-imgs-f.vgcloud.vn/2020/10/29/13/sieu-xe-lamborghini-aventador-svj.jpg',
    },
  },
  {
    id: 3,
    name: 'Porsche',
    colors: ['#A1E52C', '#01B8E5', '#C92C49'],
    checkImg: {
      '#A1E52C': true,
      '#01B8E5': false,
      '#C92C49': false,
    },

    linkImg: {
      '#C92C49':
        'https://i.xeoto.com.vn/auto/w900/porsche/911/2020/mau-xe-porsche-911-guards-red.png',
      '#01B8E5':
        'https://autopro8.mediacdn.vn/2019/8/29/porsche-911-gt3-rs-1-1567070039148488033675.jpg',
      '#A1E52C':
        'https://autopro8.mediacdn.vn/2019/5/29/porsche-911-gt3-rs-41-15590686927141400021263.jpg',
    },
  },
  {
    id: 4,
    name: 'Motorbike',
    colors: ['#A1E52C', '#01B8E5', '#C92C49'],
    checkImg: {
      '#A1E52C': true,
      '#01B8E5': false,
      '#C92C49': false,
    },

    linkImg: {
      '#C92C49':
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80',
      '#01B8E5':
        'https://p0.pikist.com/photos/131/463/bike-superbike-1000r-suzuki-motorbike-blue-race-speed-ride.jpg',
      '#A1E52C':
        'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
  },
];
function App() {
  const [cars, setCars] = useState(dataCars);
  const handleChooseColor = (id, color) => {
    setCars((prev) => {
      return prev.map((car) => {
        if (car.id === id) {
          let newCheckImg = {};
          //Change all property checkImg false, but color clicked = true
          Object.keys(car.checkImg).map((item) => {
            car.checkImg[item] = false;
            newCheckImg = { ...car.checkImg, [color]: true };
            return null;
          });

          return { ...car, checkImg: newCheckImg };
        } else {
          return car;
        }
      });
    });
  };
  return (
    <div className="App">
      <div className="fade" />
      <div className="content">
        <div className="d-flex">
          {cars.map((car) => (
            <div key={car.id} className="cart">
              {/* Render ImG  */}
              {/* If Checkimg property true => render img with that property
               */}
              {Object.keys(car.checkImg).map((item) => {
                if (car.checkImg[item]) {
                  return (
                    <img
                      key={item}
                      src={car.linkImg[item]}
                      alt={car.name}
                      className="img"
                    />
                  );
                } else {
                  return null;
                }
              })}
              <div className="colors d-flex">
                {car.colors.map((color) => (
                  <p
                    key={color}
                    className={` ${car.checkImg[color] && 'active'}   `}
                    style={{
                      backgroundColor: color,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      marginRight: 10,
                      cursor: 'pointer',
                    }}
                    onClick={() => handleChooseColor(car.id, color)}
                  ></p>
                ))}
              </div>
              <p>{car.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
