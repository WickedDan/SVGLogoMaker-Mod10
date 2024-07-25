class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color){
    this.color = color
  }
}

class Circle extends Shape {
    constructor(name) {
      super()
      this.name = name
    }
    renderShape() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  

  class Square extends Shape {
    constructor(name) {
      super()
      this.name = name
    }
  
    renderShape() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }

  
  class Triangle extends Shape {
    constructor(name) {
      super()
      this.name = name
    }
  
    renderShape() {
      return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
  }
  
  module.exports = {Circle, Triangle, Square};

  