import clock from "../public/images/icon-clock.svg";
import avatar from "../public/images/image-avatar.png";
import eth from "../public/images/icon-ethereum.svg";
import image from "../public/images/image-equilibrium.jpg";

const App = (): JSX.Element => {
  return (
    <body>
      <div className="container">
        <div className="card-container">
          <div className="image">
            <div className="view">
              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h48v48H0z" />
                  <path
                    d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                    fill="#fff"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </div>
            <img src={image} alt="" />
          </div>
          <div className="description">
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </div>
          <div className="eth-clock">
            <h5>
              <img src={eth} alt="" className="eth-icon" /> 0.041 ETH
            </h5>
            <h5 className="days-left">
              <img src={clock} alt="" className="clock-icon" />3 days left
            </h5>
          </div>
          <hr></hr>
          <div className="author">
            <img src={avatar} alt="" className="avatar" />
            <span>Creation of</span> <p>Jules Wyvern</p>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://portfolio-frontdev.netlify.app" target="_blank">
          German Pinto
        </a>
        .
      </div>
    </body>
  );
};

export default App;
