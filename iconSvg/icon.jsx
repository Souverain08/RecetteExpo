import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const GoogleSvg = (props) => (
  <Svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.74544 18C7.74544 16.8568 7.93531 15.7608 8.27419 14.7328L2.34258 10.2032C1.18654 12.5504 0.535217 15.1952 0.535217 18C0.535217 20.8024 1.18574 23.4456 2.34018 25.7912L8.26859 21.2528C7.93291 20.2296 7.74544 19.1376 7.74544 18Z"
      fill="#FBBC05"
    />
    <Path
      fillRule="evenodd"
      cpath
      pathlipRule="evenodd"
      d="M18.1602 7.60002C20.6437 7.60002 22.8869 8.48002 24.6494 9.92002L29.7767 4.80002C26.6523 2.08002 22.6466 0.400024 18.1602 0.400024C11.1951 0.400024 5.20905 4.38322 2.34258 10.2032L8.27419 14.7328C9.64093 10.584 13.5369 7.60002 18.1602 7.60002Z"
      fill="#EB4335"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1602 28.4C13.5369 28.4 9.64093 25.416 8.27419 21.2672L2.34258 25.796C5.20905 31.6168 11.1951 35.6 18.1602 35.6C22.4591 35.6 26.5633 34.0736 29.6437 31.2136L24.0133 26.8608C22.4247 27.8616 20.4242 28.4 18.1602 28.4Z"
      fill="#34A853"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.9841 18C34.9841 16.96 34.8239 15.84 34.5835 14.8H18.1602V21.6H27.6136C27.141 23.9184 25.8543 25.7008 24.0133 26.8608L29.6437 31.2136C32.8795 28.2105 34.9841 23.7368 34.9841 18Z"
      fill="#4285F4"
    />
  </Svg>
);
const FacebookSvg = (props) => (
  <Svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_245_370)">
      <Path
        d="M18 0.900024C-3.20112 1.52102 -5.36328 31.2707 15.3144 35.1H18H20.6856C41.368 31.2671 39.1964 1.51886 18 0.900024Z"
        fill="#1877F2"
      />
      <Path
        d="M20.6856 23.0775H24.6906L25.4527 18.1044H20.6856V14.877C20.6856 13.5166 21.3516 12.1903 23.4868 12.1903H25.6543V7.95638C21.0125 7.1201 15.4357 7.37462 15.3144 14.314V18.1044H10.9501V23.0775H15.3144V35.1H18H20.6856V23.0775Z"
        fill="#F9F9F9"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_245_370">
        <Rect width="36" height="36" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export { GoogleSvg, FacebookSvg };
