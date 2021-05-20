var camera = document.querySelector(".camera");
var cameraArea = camera.getBoundingClientRect();

var centerX = cameraArea.left + cameraArea.width;
var centerYY = cameraArea.top + (cameraArea.height / 2);

document.addEventListener("mousemove", (e)=>{
  let x = e.clientX - centerX,
      y = e.clientY - centerYY,
      theta = Math.atan2(y,x),
      angle = theta*180/Math.PI + 180;

  if(0 < angle && angle < 45 || 315 < angle && angle < 360){
    camera.style.transform = `rotate(${angle + "deg"})`;
  }

});
