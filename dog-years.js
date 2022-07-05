function dogYears(planet, seconds){
    let earthYears = {
        'earth': 1.0,
        'mercury': 0.2408467,
        'venus': 0.61519726 ,
        'mars': 1.8808158,
        'jupiter': 11.862615 ,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132,
      };
      let dogSeconds = seconds/31557600
      let dogYears = parseFloat((7*dogSeconds)/(earthYears[planet]));
      return Number(dogYears.toFixed(2));
};