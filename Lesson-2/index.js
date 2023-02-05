const fs = require("fs");

// Write file
fs.writeFile("demo1.txt", "Hello friends, how are you?", (err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("successful");
  }
});

// Append file
fs.appendFile("demo1.txt", "I'am Ripon video", (err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("successful");
  }
});

// Read file
fs.readFile("demo1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(data.toString("utf8"));
  }
});

//Delete file

fs.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});
