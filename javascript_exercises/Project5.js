const myArr =[2, 3, 5, 6, 8]
var newElement = [];
const sumSquared = (arr) => {
  for (let i = 0; i < arr.length; i++) {
      var element = arr[i];
    //   square each number
    element = element**2;
    // save to new array
    newElement.push(element);
  }
      console.log(newElement)
}


sumSquared(myArr) // => 136