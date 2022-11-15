export class Market{
    prodacts=[];
    constructor(){}
    addprodact(p){
        this.prodacts.push(p);
    }
    removeprodact(p){
        for(let i=0; i<this.prodacts.length;i++){
            if (this.prodacts[i].name==p.name){
                this.prodacts.splice(i,1);
            }
        }
    }
}