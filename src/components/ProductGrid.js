import React from 'react';
import ProductTile from './ProductTile';

 export default function ProductGrid(products){
 const len=products.products.length;

 var arr=[];
 for (var i=0;i<len;i++){
 var a = <ProductTile key={products.products[i].id}
 product={products.products[i]} />
 arr.push(a);
 }
 return(arr);
 }
