Readme for 335-03-p1-Team A-022621
------------------------------------------------------------
Class number: 335-03
Project name/number: Project 1, Cella Larks Ant 34
Team name:Team A
Group Members: Michael Nguyen, Ian Nguyen, Keerthi Thummati, Ernest Lin, 
Dimple Pandya 
------------------------------------------------------------
Intro
  This program draws a grid and runs a Cella Larks Ant.  The ant will
  move spaces according to the color that it is on. The algorithm used for this
  is the Lark's Ant algorithm.   

  This is an example project using HTML, Javascript (JS), and P5.js
  which is a JS-adapted version of the Processing Language.  CF HTML and
  JS on the web (eg, Wikipedia).  More on P5 is at
  p5js.org/reference.and at github.com/processing/p5.js/wiki.

  P5 provides automated animation (via a user-built "draw" function),
  and GUI manipulation functions that are simpler than JS.

Zip Contents

  File readme.txt.  This file.

  File index.html. Drag and drop this into a browser to
    run lark's ant.

  File p5.js. This is the P5 package.  It is loaded inside the html.

  File cs-sketch.js; This contains the core code for the ant.  Defined
    in the draw() function.  P5's setup() is run once before page display.
    P5's draw() is run once per display frame, so you can do animation. 

  File assets/styles.css.  This is an extra-small example of controlling
    webpage styling.  // Loaded inside the html.

  File assets/draw-stuff.js. This is an example to show loading a JS
    script file from a folder other than the index HTML file's
    folder location.  It also includes the utility draw_grid function
    written in P5+JS. // Loaded inside the html.

Installation & Running

  1. Extract the .zip file into a folder.

  2. Drag the index HTML file, index-js-p5-example.html, into a browser
    window.  The example P5 program should start immediately.  You
    should see a 640x480 grid (white lines on black background) with
    row/column headers and some of the grid cells colored.  See cellapic.png for
    the first 2000 steps the ant will take.

Testing
  o- Following installation instruction, above, watched it run. See if the ant follows
     the same path as the png.

Features
  Displays the lark's ant on screen and automatically runs the algorithm.  Shows the 
  ant moving along changing colors.

Credits
  This project was built repurposing the code from the js-p5-example given
  to us.  Much of the original code from the example is still here with only the 
  draw function inside the cs-sketch.js changed to work for the Cella Lark's ant.
  
  Some code was borrowed and modified from Stuart's book.  
    Introducing JavaScript Game Development: Build a 2D Game from the
    Ground Up, by Graeme Stuart, 2018, 209 pages.
  
  And, of course, thanks to the HTML and P5.js developers.
