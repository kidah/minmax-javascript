function Car( name='General', model='GM',type, speed, drive, numOfDoors, numOfWheels){
    
    if(this.type= 'trailer'){
        this.numOfWheels= 8;
    }
    else{
         this.numOfWheels = 4;
    }
    if( this.name == 'Porsche' || 'Koenigsegg' ){
        this.numofDoors = 5;
    }
    else{
       this.numOfDoors = 4; 
    }
   
    
    var speed = 0;
    this.type = type;
    this.model = model;
    this.name = name;
    this.speed = '0 km/h';
    this.drive = function(){
        this.speed = '77 km/h';
        return this.speed;
    }