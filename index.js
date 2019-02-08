// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers,hometown){
 const byHomeTown=drivers.filter(function(driver){
    return driver.hometown===hometown
  })

  logDriverNames(byHomeTown)
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a-b;
  })
}
