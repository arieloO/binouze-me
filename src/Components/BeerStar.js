import React from "react";

const ratio = 86 / 73;

const BeerStar = ({ rate, id, checked, size = 20 }) => (
  <li onClick={() => rate(id)} className={checked ? "selected" : null}>
    <svg
      preserveAspectRatio="xMidYMid meet"
      width={size}
      height={size * ratio}
      viewBox="0 0 73 86"
      className="star"
    >
      <path
        strokeWidth="2"
        id="svg_1"
        d="m61.6208,33.8545l-8.70113,0l0,-1.42248c2.83387,-2.09888 4.67498,-5.4656 4.67498,-9.2548c0,-5.61369 -4.0394,-10.30195 -9.36409,-11.31068c-1.54776,-5.71462 -6.76213,-9.86637 -12.9226,-9.86654c-3.40953,0.00016 -6.6817,1.31854 -9.14178,3.61255c-0.8784,-0.22972 -1.78671,-0.34794 -2.69969,-0.34794c-4.34067,0 -8.12719,2.63354 -9.77687,6.42056c-0.22503,-0.01326 -0.45121,-0.01981 -0.67792,-0.01981c-6.34752,0 -11.51168,5.16415 -11.51168,11.51168c0,3.495 1.56758,6.62879 4.0342,8.74179l0,47.61082c0,2.77075 2.26699,5.03771 5.03771,5.03771l37.31001,0c2.77075,0 5.03773,-2.26696 5.03773,-5.03771l0,-7.38865l8.70114,0c5.18516,0 9.40374,-4.21857 9.40374,-9.40376l0,-19.47919c0,-5.18515 -4.21858,-9.40358 -9.40374,-9.40358l0.00001,0.00002zm-15.53784,-5.5467l-29.47669,0l0,10.25193c0,1.76203 -1.42854,3.19055 -3.19056,3.19055c-1.76203,0 -3.19056,-1.42853 -3.19056,-3.19055l0,-11.07812c-1.40938,-0.91552 -2.34405,-2.5024 -2.34405,-4.30456c0,-2.82901 2.30157,-5.13058 5.1306,-5.13058c0.63675,0 1.25993,0.11654 1.85252,0.34625c0.94641,0.36691 2.01105,0.26179 2.8673,-0.28362c0.85625,-0.54542 1.40184,-1.46564 1.4695,-2.47838c0.1493,-2.23456 2.02283,-3.98499 4.26546,-3.98499c0.73146,0 1.42481,0.17799 2.06042,0.52878c1.40636,0.77614 3.1704,0.38572 4.11799,-0.91132c1.33802,-1.83155 3.40215,-2.88207 5.66306,-2.88207c3.74084,0 6.81536,2.92321 6.99942,6.65499c0.04214,0.85642 0.42738,1.65993 1.06882,2.22902c0.64132,0.56926 1.48479,0.85708 2.34019,0.79663c0.14844,-0.0104 0.26499,-0.01511 0.36658,-0.01511c2.82902,0 5.13058,2.30157 5.13058,5.13057s-2.30156,5.13058 -5.13058,5.13058zm16.20951,34.42963c0,0.35785 -0.31384,0.67168 -0.67167,0.67168l-8.70113,0l0,-20.82256l8.70113,0c0.35785,0 0.67167,0.31384 0.67167,0.67168l0,19.47919l0,0.00002z"
      />
    </svg>
  </li>
);

export default BeerStar;
