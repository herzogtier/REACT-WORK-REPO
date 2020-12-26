import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App";


// const link = React.createElement(
//   'a',
//   {
//     href: 'https://www.google.com',
//     target: '_blank',
//     rel: "noreferrer noopener"
//   },
//   'Ссылка на гугл'
// );

// const linkInJSX = (
//   <a href='https://www.google.com' target='_blank' rel="noreferrer noopener">
//     Ссылка на гугл
//   </a>
// )

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', { children: [image, title, price, button] });

// const imgURL = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const foodPrice = 15;

// const productJSX = (
//     <div>
//       <img
//         src={ imgURL}
//         alt='Tacos With Lime'
//         width="640" 
//       />
//       <h2>Tacos With Lime</h2>
//       <p>Price: {(foodPrice * 20)/100 + foodPrice}$ with taxes</p>
//       <button type="button">Add to cart</button>
//     </div>
// );

// const parentJSX = (
//   <>
//     <h2>Tacos With Lime</h2>
//     <p>Price: {(foodPrice * 20)/100 + foodPrice}$ with taxes</p>
//     <button type="button">Add to cart</button>
//   </>
// );





// ReactDOM.render(linkInJSX, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(linkInJSX, document.getElementById('root'));