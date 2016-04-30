var word = "bottle";
var count = 99;
while (count > 0) {
  if (count > 1) {
    console.log(count + " " + word + "s of beer on the wall,");
    console.log(count + " " + word + "s of beer,");
  } else {
    console.log(count + " " + word + " of beer on the wall,");
    console.log(count + " " + word + " of beer,");
  } 
  console.log("You take one down, pass it around,");
  count = count - 1;
  if (count > 1) {
    console.log(count + " " + word + "s of beer on the wall.");
  } else if (count == 1) {
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    console.log("No more " + word + "s of beer on the wall.");
  }
}