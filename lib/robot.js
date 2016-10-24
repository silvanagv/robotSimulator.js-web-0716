'use strict';

function Robot() {
  this.orient = function(direction){
    if (direction == "east"){
      this.bearing = "east"
    }
    else if (direction == "west"){
      this.bearing = "west"
    }
    else if (direction == "north"){
      this.bearing = "north"
    }
    else if (direction == "south"){
      this.bearing = "south"
    }
    else {
      throw new Error("Invalid Robot Bearing")
    }
  }
  this.at = function(x,y){
    this.coordinates = [x,y]
  }
  this.advance = function(){
    if (this.bearing == "north"){
      this.coordinates[1]++
    }
    else if (this.bearing == "south"){
      this.coordinates[1]--
    }
    else if (this.bearing == "east"){
      this.coordinates[0]++
    }
    else if (this.bearing == "west"){
          this.coordinates[0]--
        }
  }
  this.turnRight = function(){
    if (this.bearing == "north"){
      this.bearing = "east"
    }
    else if (this.bearing == "east"){
      this.bearing = "south"
    }
    else if (this.bearing == "south"){
      this.bearing = "west"
    }
    else if (this.bearing == "west"){
      this.bearing = "north"
    }
  }
  this.turnLeft = function(){
    if (this.bearing == "north"){
      this.bearing = "west"
    }
    else if (this.bearing == "east"){
      this.bearing = "north"
    }
    else if (this.bearing == "south"){
      this.bearing = "east"
    }
    else if (this.bearing == "west"){
      this.bearing = "south"
    }
  }
  this.instructions = function(string){
    var ary = string.split("")
    var instructions_array = []
     for (var i = 0; i < ary.length; i++){
        if (ary[i] == "L"){
          instructions_array.push("turnLeft")
        }
        else if (ary[i] == "R"){
          instructions_array.push("turnRight")
        }
        else if (ary[i] == "A"){
          instructions_array.push("advance")
        }
      }
      return instructions_array
  }
  this.place = function(stuff){
    this.coordinates = ([stuff.x, stuff.y])
    this.bearing = stuff.direction
  }
  this.evaluate = function(letters){
    var toDo = this.instructions(letters)
    for (var j = 0;j < toDo.length; j++){
      eval("this."+toDo[j]+"()")
    }
  }
}
