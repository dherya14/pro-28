class launcher{
    constructor(bodyA,pointB){
        var option= {
            bodyA : bodyA,
            pointB:  pointB,
            length:1,
            stiffness:0.004
        }
        this. pointB=pointB
        this.launcher=Constraint.create(option)
        World.add (world,this.launcher)
     }
     attach(body){
        this.launcher.bodyA=body
         
     }
         

     fly(){
         this.launcher.bodyA=null
     }
    display(){
    if(this.launcher.bodyA){
        var posA = this.launcher.bodyA.position
        var posB = this.pointB
        
        line(posA.x,posA.y,posB.x,posB.y )
    }
        

    }
} 