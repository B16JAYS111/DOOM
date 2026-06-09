// Conceptual snippet to replace flat color with a texture slice
let textureX = Math.floor(wallHitPosition * textureWidth); 

// Draw the slice from your image onto the canvas
ctx.drawImage(
    textureImage, 
    textureX, 0, 1, textureHeight,                  // Source clipping (1 pixel wide slice)
    i, (canvas.height/2) - (wallHeight/2), 1, wallHeight // Destination on screen
);
