// Get the video element
var video = document.querySelector("#videoElement");

// Check if getUserMedia is supported by the browser
if (navigator.mediaDevices.getUserMedia) {
  // Request access to the webcam
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // Set the video source to the webcam stream
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Error accessing the webcam: " + error);
    });
}
