import React from "react";
import Electronics from './electronics/electronics'
import Jewelery from './jewelery/jewelery.js'
import Clothes from './clothes/clothes'

export default function Products() {
  return (
  <React.Fragment>
    <h1>Electronics</h1>
    <Electronics />
    <br />
    <h1>Jewelery</h1>
    <Jewelery />
    <br />
    <h1>Clothes</h1>
    <Clothes />
    <br />
  </React.Fragment>
  );
}
