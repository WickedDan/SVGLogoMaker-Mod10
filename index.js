// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

function createSVG(text, textColor, newshape) {
  const svgShape = newshape.renderShape();

  const svg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgShape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  return svg;
}

inquirer.prompt([

  {
    type: "maxlength-input",
    message: "Text?",
    name: "text",
    maxLength: 3,
  },

  {
    type: "input",
    message: "Text Color?",
    name: "textColor",
  },

  {
    type: "list",
    message: "Shape?",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },

  {
    type: "input",
    message: "Shape Color?",
    name: "shapecolor",
  },

]).then(answers => {
  const { text, textColor, shape, shapecolor } = answers;
  let newshape;
  switch (shape) {
    case 'Circle':
      newshape = new Circle(shape);
      break;
    case 'Square':
      newshape = new Square(shape);
      break;
    case 'Triangle':
      newshape = new Triangle(shape);
      break;
  }
  newshape.setColor(shapecolor);
const svg = createSVG(text, textColor, newshape);
fs.writeFileSync("logo.svg", svg);

});

