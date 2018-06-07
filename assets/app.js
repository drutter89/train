var config = {
  apiKey: "AIzaSyBeVtM3uiHHsrljxxPLhW6WcM2Mb6Mz4ak",
  authDomain: "train-d3564.firebaseapp.com",
  databaseURL: "https://train-d3564.firebaseio.com",
  projectId: "train-d3564",
  storageBucket: "",
  messagingSenderId: "166738016174"
};
firebase.initializeApp(config);

// Initial Values
var name = "";
var destination = "";
var frequency = "";
var nextArrival = "";
var minAway = "";
var databaseTrain = firebase.database();
var moment = moment().format("HH:mm");

$(function () {
  console.log("ready!");

  // Capture Button Click
  $("#trainBtn").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text-boxes
    name = $("#name").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    nextArrival = $("#nextArrival").val().trim();
    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(nextArrival);

    // Code for "Setting values in the database"
    databaseTrain.ref().push({
      name: name,
      destination: destination,
      frequency: frequency,
      nextArrival: nextArrival,
      minAway: minAway
    });
    var nameInput = "#name-input";
    var destinationInput = "#destination-input";
  });


  // Firebase watcher + initial loader HINT: .on("value")

  databaseTrain.ref().on("value", function (snapshot) {


      // Change the HTML to reflect


      // Handle the errors
    },
    function (errorObject) {
      console.log("Errors handled: " + errorObject.code);

    });

  function getTrains() {

    var ref = databaseTrain().ref("#minAway");
    $("minAway").text(minAway);
    moment().format('HH:mm');
  }



});