let points = "10 20 20 8 25 3 0 30 1"

points = points.split(" ")

function record() {
  
  let actualRecord = null
  let recordCounter = 0


  for(let i = 0; i <= points.length; i++) {
    if(points[i] > actualRecord) {
      actualRecord = points[i] 
      recordCounter++
    }
  }
  console.log(actualRecord)
  console.log(recordCounter)
}

record()