/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let hello = document.getElementById(`canvas1`).getContext(`2d`)
hello.font = `48px Sans-Serif`;
hello.strokeText(`Hello, World!`, 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let drawRectangle = document.getElementById('canvas2');
  let context = drawRectangle.getContext('2d');
  context.clearRect(0, 0, drawRectangle.width, drawRectangle.height);

  let height;
  do {
    height = Number(prompt('Enter a height.'));
  } while (height < 1 || !Number.isInteger(height));

  let width;
  do {
    width = Number(prompt('Enter a width.'));
  } while (width < 1 || !Number.isInteger(width));

  let x;
  do {
    x = Number(prompt('Enter a x value.'));
  } while (x < 5 || !Number.isInteger(x));

  let y;
  do {
    y = Number(prompt('Enter a y value.'));
  } while (y < 5 || !Number.isInteger(y));

  context.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let canvas3 = document.getElementById('canvas3');
  let ctx = canvas3.getContext('2d');
  ctx.clearRect(0, 0, canvas3.width, canvas3.height);
  let canvasDrawing = false
  userColor = prompt("Enter a color.");

  if (userColor == "black" || userColor == "blue" || userColor == "green" || userColor == "orange" || userColor == "purple" || userColor == "red" || userColor == "yellow"){
    canvasDrawing = true;
}
else{
  alert(`The inputed color is not supported. Try another color.`)
}
  ctx.fillStyle=userColor;
  ctx.fillRect(10, 10, 100, 50);
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let triangle = document.getElementById("canvas4").getContext("2d");

  let side1 = Number(prompt("Please enter a positive interger for your left side length."));
  let side2 = Number(prompt("Please enter a positive interger for your bottom side length."));
  let side3 = Number(prompt("Please enter a positive interger for your hypotenuse length."));
  let triangleX = 10;
  let triangleY = 10;
  let canvasDrawing = false;
  triangle.clearRect(0, 0, canvas4.width, canvas4.height)

if((side1*side1 + side2*side2 == side3*side3) && side1>0 && side2>0 && side3>0 && canvas4.width-triangleX-side1>=0 && canvas4.height-triangleY-side2>=0){
    canvasDrawing = true;
    } else{
      alert("That is not a valid right triangle.")
    }
  if(canvasDrawing == true){
    triangle.beginPath();
    triangle.moveTo(triangleX, triangleY);
    triangle.lineTo(triangleX, triangleY+side1);
    triangle.lineTo(triangleX+side2, triangleY+side1);
    triangle.lineTo(triangleX, triangleY);
    triangle.closePath();
    triangle.stroke();
  }


}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let canvas5= document.getElementById('canvas5').getContext('2d');
  canvas5.clearRect(0, 0, canvas5.width, canvas5.height);

  let userRadius = Number(prompt(`Enter a radius`));
  let canvasDrawing = false
  let eyesRadius=userRadius*0.1
  let mouthRadius=userRadius*0.7

  if(userRadius >= 1 && userRadius <= canvas5.width && userRadius <= canvas5.height && Number.isInteger(userRadius)){
    canvasDrawing = true;
  }
  else{
    alert("Invalid radius. Please try again.")
}

  canvas5.beginPath();
  canvas5.arc(userRadius + 10, userRadius + 10, userRadius, 0, Math.PI * 2);
  canvas5.stroke();
  canvas5.closePath();

  canvas5.beginPath();
  canvas5.arc(userRadius + 10 - userRadius/3, userRadius + 10 - userRadius/4, eyesRadius,0, Math.PI*2);
  canvas5.stroke();
  canvas5.closePath();

  canvas5.beginPath();
  canvas5.arc(userRadius + 10 + userRadius/3, userRadius + 10 - userRadius/4, eyesRadius, 0, Math.PI*2);
  canvas5.stroke();
  canvas5.closePath();

  canvas5.beginPath();
  canvas5.arc(userRadius + 10, userRadius + 10, mouthRadius, 0, Math.PI);
  canvas5.stroke();
  canvas5.closePath();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
   let starDrawing = document.getElementById("canvas6").getContext("2d");
   starDrawing.clearRect(0,0,1024,760);

   let outerRadius;
   let innerRadius;
   do {
     outerRadius = Number(prompt("Outer Radius:"));
   } while (isNaN(outerRadius));
   do {
     innerRadius = Number(prompt("Inner Radius:"));
   } while (isNaN(innerRadius));

   let degrees = 0;

   if (innerRadius > outerRadius){
     alert("Your outer radius must be larger than your inner radius.");
   } else if (outerRadius<2){
     alert("Your outer radius is too small.");
   } else if (innerRadius<1){
     alert("Your inner radius is too small");
   } else {
     starDrawing.beginPath();
     starDrawing.moveTo(125,125-outerRadius);
     }
for (let i=0; i<=5; i++){
  starDrawing.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*outerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*outerRadius)));
  degrees +=36;
  starDrawing.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*innerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*innerRadius)));
  degrees +=36;
     }
     starDrawing.stroke();
     starDrawing.closePath();
   }


/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let stopSign = document.getElementById("canvas7").getContext("2d");
  stopSign.clearRect(0, 0, canvas7.height, canvas7.width)
  let side = 80;
  let i = Number((80/Math.sqrt(2)).toFixed(0));
  let signX = 70;
  let signY = 10;

    stopSign.beginPath();
    stopSign.moveTo(signX,signY);
    stopSign.lineTo(signX+side,signY);
    stopSign.lineTo(signX+side+i,signY+i);
    stopSign.lineTo(signX+side+i,signY+side+i);
    stopSign.lineTo(signX+side,signY+side+i+i);
    stopSign.lineTo(signX,signY+side+i+i);
    stopSign.lineTo(signX-i,signY+side+i);
    stopSign.lineTo(signX-i,signY+i);
    stopSign.lineTo(signX,signY);
    stopSign.fillStyle="red";
    stopSign.fill();
    stopSign.closePath();

  stopSign.fillStyle="white";
  stopSign.font="65px sans-serif";
  stopSign.fillText("STOP", 22, 133);
}


/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
    let pyramid = document.getElementById('canvas8').getContext("2d")
    pyramid.clearRect(0, 0, canvas8.width, canvas8.height);
    let length=Number(prompt("Please enter a side length"));
    let pyramidx = 10;
    let pyramidY = canvas8.height-10;
    let i = 0;
    lineNumber = 1;
    while(i < 5){
      for(let j = 0+lineNumber;j <= 5; j++){
        pyramid.strokeRect(pyramidx, pyramidY - length, length, length);
        pyramidx += length;
      }
    pyramidx = 10 + (length / 2) * lineNumber;
    pyramidY -= length;
      lineNumber++;
      i++;
    }
/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
let drawHouse = document.getElementById(`canvas9`).getContext("2d");
drawHouse.clearRect(0,0,canvas9.width, canvas9.height);
let userHouse = prompt(`Enter a color for the house`)
let userDoor = prompt(`Enter a color for the door`)

if (userHouse == "blue" || userHouse == "brown" || userHouse == "green" || userHouse == "orange" || userHouse == "purple" || userHouse == "red" || userHouse == "yellow"){
  drawHouse.fillStyle="black";
  drawHouse.fillRect(150,300,724,450);
  drawHouse.fillStyle=userHouse;
  drawHouse.fillRect(151,301,722,448);
  drawHouse.fill();

  drawHouse.beginPath();
  drawHouse.moveTo(150,300);
  drawHouse.lineTo(510,10);
  drawHouse.lineTo(860,300);
  drawHouse.lineTo(150,300);
  drawHouse.fillStyle="black";
  drawHouse.fill();
  drawHouse.closePath();
  drawHouse.beginPath();
  drawHouse.moveTo(150,300);
  drawHouse.lineTo(510,12);
  drawHouse.lineTo(870,300);
  drawHouse.lineTo(150,300);
  drawHouse.fillStyle="gray";
  drawHouse.fill();
  drawHouse.closePath();

  drawHouse.fillStyle="black";
  drawHouse.fillRect(260,620,80,80);
  drawHouse.fillRect(260,400,80,80);
  drawHouse.fillRect(684,620,80,80);
  drawHouse.fillRect(700,400,80,80);
  drawHouse.fillStyle="lightblue";
  drawHouse.fillRect(261,620,80,80);
  drawHouse.fillRect(261,400,80,80);
  drawHouse.fillRect(685,620,80,80);
  drawHouse.fillRect(700,400,80,80);

  drawHouse.fillStyle="black"
  drawHouse.fillRect(462,590,100,160);
  drawHouse.fillStyle=userDoor;
  drawHouse.fillRect(462,590,100,160);
} else {
  alert("One or more than one of your colors is not supported. Please try again.");}
}
}
