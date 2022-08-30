let ctxStates = [
  {
    city: "Los Angeles",
    state: "california",
    region: "West",
    temperature: "101°F",
  },
  {
    city: "San Francisco",
    state: "california",
    region: "West",
    temperature: "84°F",
  },
  { city: "Miami", state: "Florida", region: "South", temperature: "112°F" },
  {
    city: "New York City",
    state: "new york",
    region: "North East",
    temperature: "0°F",
  },
  { city: "Juneau", state: "Alaska", region: "West", temperature: "21°F" },
  {
    city: "Boston",
    state: "massachussetts",
    region: "North East",
    temperature: "45°F",
  },
  {
    city: "Jackson",
    state: "mississippi",
    region: "South",
    temperature: "70°F",
  },
  { city: "Utqiagvik", state: "Alaska", region: "West", temperature: "-1°F" },
  {
    city: "Albuquerque",
    state: "new mexico",
    region: "West",
    temperature: "95°F",
  },
];

// let cityOnly = ([
//   'Los Angeles',
//     'San Francisco',
//     'Miami',
//     'New York City',
//     'Juneau',
//     'Boston',
//     'Jackson',
//     'Utqiagvik',
//     'Albuquerque',
// ])

let cityOnly =([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
  {
      city: 'New York City',
      temperature: '101 °F',
      state: 'california',
      region: 'West',
    },
]) // -> ['los Angeles', 'San Francisco']

// console.log(upperCasingStates(citiesOnly(cityOnly)))
console.log(tempForecasts(cityOnly))

function citiesOnly(objArr){

    // let reformat = cityOnly.map(({city, value})=> ({[city]: value}))
    // const values = Array.prototype.map.call(cityOnly,({key})=>city)
    
    const cities = objArr.map(object =>object.city) // creates a new map from obj arr input---- arr , arr.city adds arr.city into cities const (.city refers to the key)

    console.log(cities)

    return cities 

    //  return []atringa from city key
}

function upperCasingStates (str){

    const cities = str.map(object => object)
    let r = []
    // console.log(cities)
    let b = ""
    for (let i =0; i < cities.length; i ++){
        let city = cities[i].split(" ")
        console.log(capital(city))
        r.push(capital(city))
        // b +=(capital(city))
    }
    // console.log(b)

    return r

}
function capital(strArr){
        // const upper = cities =>cities.map (word => word[0].toUpperCase()+ word.substr(1)+word.join(" "))
        // return upper(strArr)
    let w = ""
for ( let i = 0; i< strArr.length; i ++ ){
    w += (strArr[i][0].toUpperCase() + strArr[i].substr(1)) 
    if (i ==0 && strArr.length >1){
        w+= " "
    }    
}

return w
}

function fahrenheitToCelsius(arrTemp){
    let split = []
    
    // }
    // const transform = arrTemps=> arrTemps.map(temp => String(Number(Math.floor(((temp[0]+temp[1])-32))))+"°C")
    
    // return (transform(arrTemps))

    const arrTemps = arrTemp.map(temp =>temp)
    // console.log(arrTemps[0][0])

    for (let i =0; i < arrTemps.length; i ++){
        split.push (arrTemps[i].split("°"))
    }
    for (let i = 0; i <arrTemps.length; i++){
        split[i][0] = Math.floor((split[i][0]-32) /1.8)
        split[i][0]+= ("°C")
        // removeItem("F", split[i])
        split[i].splice(1,1)

        // split[i][1] = "C"
    }
    // return split.join("°")
    return [].concat(...split)
}

function trimTemp(temperature){

    const obj = temperature => temperature.map(temp => temp)
    const cutSpace = obj =>obj.map(cut => cut.temperature .replace(/\s/g,""))

    obj(temperature).temperature = cutSpace(temperature)[1]

    // console.log(cutSpace(temperature))
    // console.log(obj(temperature).length)

    for (let i =0; i <obj(temperature).length; i ++){
        console.log(obj(temperature)[i].temperature)
        obj(temperature)[i].temperature = cutSpace(temperature)[i]

    }
    // console.log(obj(temperature)[0])

   
    return((obj(temperature)))
}

// function tempForecasts (objArr){

//     let layout = []
//     let c = []
//     let s = []

//     const temp = fahrenheitToCelsius (objArr.map(temperature => temperature.temperature))
//     const city = capital(citiesOnly(objArr))
//     const state = capital(objArr.map(state => state.state))
//     // console.log(temp[0])
//     layout.push(temp[0],"in", city, state)
//     c.push(city)

//     // const tempC = fahrenheitToCelsius(temp)
//     console.log(layout.length)
//     console.log(city.length)
//     console.log(c.length)

//     return layout
// }

//by Karolus:
function tempForecasts (objArr){
let arr = []

     objArr.map( item => {

    const temp = (item['temperature'].split("°"))
        let city = item['city']
        let state =  item['state']
        // console.log(state)
        let c = city.split(" ")
        let s = state.split(" ")

        city = capital(c)
        if( city == "New YorkCity"){
            city = "New York City"
        }
        state = capital(s)
        console.log
        temp[0]= Math.floor((temp[0]-32)/1.8) + "°Celsius"

       let  str = temp[0] + " "+ "in" + " "+ city+"," +" " + state
    //    let arr = []
       arr.push(str)
   
})

return arr
}
