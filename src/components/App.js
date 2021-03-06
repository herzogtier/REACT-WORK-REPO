import React from "react";
import Product from "./Product";
import Section from "./Section";

export default function App() { 
  return (
      <>
          <h1>Welcome!</h1>
          
          <Section title="Best selling">
                <Product
                  name="Tacos With Lime"
                  url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
                  price={ 20 }
                />
          </Section>
      
            <Section title="Recomended">
                
                <Product
                  name="Fries and Burger"
                  url="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                  price={ 50}
                />
            </Section>
    </>
  );
}