class redZone{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
        World.add(World,this.body)
        this.width=width
        this.height=height
    }
    display(){
        var pos=this.body.position;
        rect(0,0,this.width,this.height)
        fill("red")
    }
}