class vechile{
    #id;
    name;  

    constructor(id,name){
        this. #id=id;
        this.name=name;
    
    }
    
    #getnumber(Number){
        return Number;
    
    }
    getdetails(){
        return 'Vehicle Id: ${this.#getnumber(this.#id)) \n Vehicle Name: ${this.name}'
    }
    }
    var v1 = new Vehicle(6888,'Tyota')
    v1.name='Innova'
    console.log(v1.getdetails());