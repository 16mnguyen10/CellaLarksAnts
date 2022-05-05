/*
    Michael Nguyen, Ian Nguyen, Keerthi Thummati, Ernest Lin, Dimple Pandya 
    February 27, 2021
    CPSC 335 P1
*/

// cs-sketch.js; P5 key animation fcns.  // CF p5js.org/reference
// Time-stamp: <2020-02-02 15:58:23 Chuck Siska>

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:64, hgt:48 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

//======================= Being section for setup ===================================
function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 10, 50, 'white', 'yellow' );
}
//======================= End of section for setup ===================================


//======================= Being section for Ant and move =============================
class Ant {
    constructor(x, y, color, box)
    {
      this.dir = 0;
      this.x = x;
      this.y = y;
      this.color = color;
      this.box = box;
      this.mode = "LRMode";
      this.counter = 0;
      this.direction = "forward";
    }
    
    move(direction)
    {
        let dx = 0;
        let dy = 0;
        
        // Error here (Continuously going in a straight line)
/*         if(this.dir === 0)
        {
          if(direction === "forward")
          {
            dx = 0;
            dy = -1;
          }
          else if(direction === "right")
          {
            dx = 1;
            dy = 0;
            this.dir = 3;
          } 
          else if(direction === "forward")
          {
            dx = -1;
            dy = 0;
            this.dir = 2;
          }
        } 
        else if(this.dir === 1)
        {
          if(direction === "forward")
          {
            dx = 0;
            dy = 1;
          } 
          else if(direction === "right")
          {
            dx = 2;
            dy = 0;
            this.dir = 2;
          } 
          else if(direction === "left")
          {
            dx = 1;
            dy = 0;
            this.dir = 3;
          }
        } 
        else if(this.dir === 2)
        {
          if(direction === "forward")
          {
            dx = -1;
            dy = 0;
          } 
          else if(direction === "right")
          {
            dx = 0;
            dy = -1;
            this.dir = 0;
          } 
          else if(direction === "left")
          {
            dx = 0;
            dy = 1;
            this.dir = 1;
          }
        }
        else if(this.dir === 3)
        {
          if(direction === "forward")
          {
            dx = 1;
            dy = 0;
          }
          else if(direction === "right")
          {
            dx = 0;
            dy = 1;
            this.dir = 1;
          }
          else if(direction === "left")
          {
            dx = 0;
            dy = -1;
            this.dir = 0;
          }
        } */
  
        if(this.dir === 0)
        {
            if (direction === "left")
            {
                dx = -1;
                dy = 0;
                this.dir = 2;
            }
            else if (direction == "right")
            {
                dx = 1;
                dy = 0;
                this.dir = 3;
            }
            else if (direction === "forward")
            {
                dx = 0;
                dy = -1;
            }
        }
        else if (this.dir === 1)
        {
            if (direction === "left")
            {
                dx = 1;
                dy = 0;
                this.dir = 3;
            }
            else if (direction == "right")
            {
                dx = 2;
                dy = 0;
                this.dir = 2;
            }
            else if (direction === "forward")
            {
                dx = 0;
                dy = 1;
            }
        }
        else if (this.dir === 2)
        {
            if (direction === "left")
            {
                dx = 0;
                dy = 1;
                this.dir = 1;
            }
            else if (direction == "right")
            {
                dx = 0;
                dy = -1;
                this.dir = 0;
            }
            else if (direction === "forward")
            {
                dx = -1;
                dy = 0;
            }
        }
        else if (this.dir === 3)
        {
            if (direction === "left")
            {
                dx = 0;
                dy = -1;
                this.dir = 0;
            }
            else if (direction == "right")
            {
                dx = 0;
                dy = 1;
                this.dir = 1;
            }
            else if (direction === "forward")
            {
                dx = 1;
                dy = 0;
            }
        }

        let x = (dx + this.x + this.box.wid) % this.box.wid; // Move-x.  Ensure positive b4 mod.
        let y = (dy + this.y + this.box.hgt) % this.box.hgt; // Ditto y.
  
        this.x = x;
        this.y = y;
  
    }
    
    draw() {
        let sz = g_canvas.cell_size;
        let sz2 = sz / 2;
        let x = 1+ this.x*sz; // Set x one pixel inside the sz-by-sz cell.
        let y = 1+ this.y*sz;
        let big = sz -2; // Stay inside cell walls.
        let acolors = get( x + sz2, y + sz2 ); // Get cell interior pixel color [RGBA] array.
        //console.log(acolors);
        let pix = acolors[ 0 ] + acolors[ 1 ] + acolors[ 2 ];
        //console.log(pix);
        //console.log( "acolors,pix = " + acolors + ", " + pix );
       
      
        // Fill 'color': its a keystring, or a hexstring like "#5F", etc.  See P5 docs.
        fill( "#" + this.color );
        // Paint the cell.
        rect( x, y, big, big );
        
        if (this.counter > 0)
        {
          this.color = "0000FF";
          this.move(this.direction);
          this.counter--;
        }
        else if (pix === 0 || acolors[2] === 255)
        { 
          this.color = "FFFF00";
          this.direction = "left";
          this.move(this.direction);
        } 
        else if (acolors[0] === 255 && acolors[1] === 255)
        { 
          this.color = "FF0000";
          fill( "#" + this.color );
          // Paint the cell.
          rect( x, y, big, big );
          this.color = "0000FF";
          this.direction = "forward";
          this.move(this.direction);
          this.counter = 5;
        }
        else if (acolors[0] === 255 && acolors[1] === 0)
        { 
          this.color = "000000";
          this.direction = "right";
          this.move(this.direction);
        }
    }
}

var g_box = { t:1, hgt:40, l:1, wid:60 }; // Box in which bot can move.
let ant = new Ant(30, 20, "FFFF00", g_box);
//======================= End of section for ant and move ============================


//====================== Being section draw ==========================================
function draw_update()  // Update our display.
{
    //console.log( "g_frame_cnt = " + g_frame_cnt );
    ant.draw( );
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        if (!g_stop) draw_update();
    }
}
//======================= End of section for draw ====================================


//====================== Being section for mouse use =================================
function keyPressed( )
{
    g_stop = ! g_stop;
}

// This function isn't working for some reason and will need to be fixed
// later on
function mousePressed( )
{
    let x = mouseX;
    let y = mouseY;
    //console.log( "mouse x,y = " + x + "," + y );
    let sz = g_canvas.cell_size;
    let gridx = round( (x-0.5) / sz );
    let gridy = round( (y-0.5) / sz );
    //console.log( "grid x,y = " + gridx + "," + gridy );
    //console.log( "box wid,hgt = " + g_box.wid + "," + g_box.hgt );
    g_bot.x = gridx + g_box.wid; // Ensure its positive.
    //console.log( "bot x = " + g_bot.x );
    g_bot.x %= g_box.wid; // Wrap to fit box.
    g_bot.y = gridy + g_box.hgt;
    //console.log( "bot y = " + g_bot.y );
    g_bot.y %= g_box.hgt;
    //console.log( "bot x,y = " + g_bot.x + "," + g_bot.y );
    draw_bot( );
}
//======================= End of section for mouse use ================================
