function selectFrame(frameName) {
  document.getElementById("selectedFrame").src = `images/frames/${frameName}.webp`;
  document.getElementById("parts-builder").style.display = "block";
}

