import { Prodact } from "./prodact.js";
import { ProdctInSale } from "./prodact.js";
import {Market} from "./market.js"
let a = new Prodact("milk",5.9);
let b = new ProdctInSale("aggs",15.9,0.1);
console.log(a);
console.log(b);
console.log(b.getpriceafterdiscount());
let m = new Market();
m.addprodact(a);
m.addprodact(b);
console.log(m);
m.removeprodact(a);
console.log(m);