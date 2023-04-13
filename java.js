/**
 * @type HTMLCanvasElement
 */

      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');


  

      // Set up background
      const backgroundImage = new Image();
       backgroundImage.src = 'images/rain.png';
      backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      }; 

      
      

      // Set up stick figure
      const stickFigureImage = new Image();
      stickFigureImage.src = 'images/pig-1.png';
      
      let stickFigureX = 500;
      let stickFigureY = 450;

      

       // Set up stick figure
       const birdFigureImage = new Image();
       birdFigureImage.src = 'images/blue-bird.png';
       
       let birdFigureX = 0;
       let birdFigureY = 100;

         // Set up stick figure
         const bird2FigureImage = new Image();
         bird2FigureImage.src = 'images/blue-bird.png';
         
         let bird2FigureX = 0;
         let bird2FigureY = 5;

         // set up stick figure

         const owlFigureImage = new Image();
         owlFigureImage.src = 'images/owl.png';
         
         let owlFigureX = 230;
         let owlFigureY = 10;

         // Cloud

         const cloudFigureImage = new Image();
         cloudFigureImage.src = "images/cloud.png";

         let cloudFigureX = 300;
         let cloudFigureY = 300;

         




      // Define animation function
      function draw() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Draw stick figure
        ctx.drawImage(stickFigureImage, stickFigureX, stickFigureY);
        ctx.drawImage(birdFigureImage, birdFigureX, birdFigureY);
        ctx.drawImage(bird2FigureImage, bird2FigureX, bird2FigureY);
        ctx.drawImage(owlFigureImage, owlFigureX, owlFigureY);
        ctx.drawImage(cloudFigureImage, cloudFigureX, owlFigureY);


        // Update position
        stickFigureX += 0;
        birdFigureX +=10
        bird2FigureX +=7
        owlFigureX += 0;
        cloudFigureX+= 2;
        
      

        if (birdFigureX > canvas.width) {
        birdFigureX = -birdFigureImage.width;
        }

        if (bird2FigureX > canvas.width) {
            bird2FigureX = -bird2FigureImage.width;
            }

        if (owlFigureX > canvas.width) {
          owlFigureX = -owlFigureImage.width;
          }

          if (cloudFigureX > canvas.width) {
            cloudFigureX =-cloudFigureImage.width;
            
            }
      
    

        // Loop animation
        if (stickFigureX > canvas.width) {
          stickFigureX = -stickFigureImage.width;
          
        }


        // Animated piggy to jump
        stickFigureY = stickFigureY +0.5

        if (stickFigureY > 450){
        stickFigureY=430;
        }



        

        

        if (owlFigureX > canvas.width) {
        owlFigureX = -owlFigureImage.width
        }
        
        // pig text box!!!!!!

        ctx.fillStyle = "black"
        ctx.fillRect(698,490,30,80);

        ctx.fillStyle = "black"
        ctx.fillRect(698,458,330,80);
        
        ctx.fillStyle = "white"
        ctx.fillRect(700,475,320,50);

        ctx.fillStyle = "white"
        ctx.fillRect(700,500,20,70);

        // Pig text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "black"
        ctx.font = "30px Monospace"
        ctx.fillText("Help Im lost",850,500);


        
        // H1 text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        ctx.font = "50px Monospace";
        ctx.fillText("Welcome to my island", 750, 100);

        

        



        // Call animation again
        requestAnimationFrame(draw);
      }
      

      // Start animation
      draw();


      

      
    