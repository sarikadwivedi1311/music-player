function Movie(title,year){
    var movie ={
        title:title,
        year:year,
        cast:{
            lead:"SRK",
            colead:"Kajol",
            supportingactor:"Amrish Puri"
        },
        details:function(){
            console.log(`Title:${this.title},Year:${this.year},Cast:${this.cast}`);
        }}

        return movie;
   
}

 var m = Movie("Pathan",2020);
 console.log(m.details());

