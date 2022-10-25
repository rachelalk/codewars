// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (seconds) {
  console.log(seconds);
  
  
  //deal with only seconds
  //if less than 60 return with 00:00:{seconds}
  //if less than 10 store 0{seconds}
  if (seconds < 60) {
    if (seconds < 10) {
      console.log(`return 00:00:0${seconds}`)
      return `00:00:0${seconds}`
    }
    else {
      console.log(`return 00:00:${seconds}`)
      return `00:00:${seconds}`
    }
  }
  
  //deal with seconds and minutes
  //if less than or equal to 3599 but greater than 59
  //divide by 60 - store result and find remainder
  //check for less than 10 to pad to 2 digits
  //return 00:{minutes}:{seconds}
  if (seconds > 59 && seconds < 3600) {
    let minutes = Math.floor(seconds / 60);
    let secondsRemaining = seconds % 60;
    console.log("minutes", minutes, "seconds", secondsRemaining)
    if (minutes > 9 && secondsRemaining > 9) {
      console.log(`return 00:${minutes}:${secondsRemaining}`)
      return `00:${minutes}:${secondsRemaining}`;
    }
    if (minutes > 9 && secondsRemaining < 10) {
      console.log(`return 00:${minutes}:0${secondsRemaining}`)
      return `00:${minutes}:0${secondsRemaining}`
    }
    if (minutes < 10 && secondsRemaining > 9) {
      console.log(`return 00:0${minutes}:${secondsRemaining}`)
      return `00:0${minutes}:${secondsRemaining}`
    }
    if (minutes < 10 && secondsRemaining < 10) {
      console.log(`return 00:0${minutes}:0${secondsRemaining}`)
      return `00:0${minutes}:0${secondsRemaining}`
    }
  }
  
  //deal with seconds minutes and hours
  //over 3599
  //divide by 60 to get minutes - store remainder as seconds
  //check for less than 10 to pad to 2 digits
  //divide by 60 again to get hours - remainder is minutes
  //return {hours}:{minutes}:{seconds}
  if (seconds > 3599) {
    let secondsRemaining = seconds % 60;
    let hours = Math.floor((seconds/60) /60);
    let hoursInSeconds = (hours*60)*60
    let secondsMinusHours = seconds-hoursInSeconds
    let minutes = Math.floor(secondsMinusHours/60)
    console.log("hours", hours, "minutes", minutes, "seconds", secondsRemaining)
    if (secondsRemaining < 10) {
      secondsRemaining = `0${secondsRemaining}`
    }
        if (minutes < 10) {
      minutes = `0${minutes}`
    }
        if (hours < 10) {
      hours = `0${hours}`
    }
        console.log("hours", hours, "minutes", minutes, "seconds", secondsRemaining)
    console.log(`return ${hours}:${minutes}:${secondsRemaining}`)
    return `${hours}:${minutes}:${secondsRemaining}`
  }
  
  }

humanReadable(45296);

