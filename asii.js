const density = "Ñ1@#W$9876543210?!abc;:+=-,._          ";

let asciiDiv;
let video;
let video1;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(90, 60);
  asciiDiv = createDiv();
}
function draw() {
  video.loadPixels();
  let acsiiimage = "";

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelindes = (i + j * video.width) * 4;
      const r = video.pixels[pixelindes + 0];
      const g = video.pixels[pixelindes + 1];
      const b = video.pixels[pixelindes + 2];

      const avg = (r + g + b) / 3;
      const len = density.length;
      const charindex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charindex);
      if (c == " ") {
        acsiiimage += "&nbsp;";
      } else {
        acsiiimage += c;
      }
    }
    acsiiimage += "<br/>";
  }
  asciiDiv.html(acsiiimage);
}
