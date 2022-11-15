export class Prodact{
    name;
    price;
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
}
export class ProdctInSale extends Prodact{
    discount;
    constructor(name,price,discount){
        super(name,price)
        this.discount=discount;
    }
    getpriceafterdiscount(){
        return(this.price * (1-this.discount));
    }
}
