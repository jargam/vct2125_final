let getData = () =>
fetch('./data.json')
.then((res) => res.json());

let aptNames = () =>
getData().then(json => json.apartments).then(apartments => apartments.map(p => 
    p.aptname
    //p.apttown
    //p.price
    //p.bedrooms
    //p.bathrooms
    //p.size
    //p.info
    ))
.then((names) => names.join(", ")) 

aptNames().then(console.log);


// .then(res => res.json())
// .then(data => console.log(data))

// const user = 
// {
//     id: 1,
//     aptname:"The Quinn",
//     apttown:"Plymouth",
//     price:"1200",
//     bedrooms:"2",
//     bathrooms:"1",
//     size:"800 sq ft",
//     img:"./images/quinn.jpg",
//     info:"Spacious, great apartments made for families"
// }

// {
//     "id": 2,
//     "aptname":"Melrose Gates",
//     "apttown":"Brooklyn Center",
//     "price":"1400",
//     "bedrooms":"2",
//     "bathrooms":"2",
//     "size":"1200 sq ft",
//     "img":"./images/melrose.jpg",
//     "info":"15 minutes from downtown, you'll love this apartment"
// }
// {
//     "id": 3,
//     "aptname":"Greystar Homes",
//     "apttown":"Minneapolis",
//     "price":"2000",
//     "bedrooms":"3",
//     "bathrooms":"2",
//     "size":"1500 sq ft",
//     "img":"./images/greystar.jpg",
//     "info":"Luxury apartments right in downtown"
// }
// {
//     "id": 4,
//     "aptname":"The Lexington",
//     "apttown":"Lexington",
//     "price":"700",
//     "bedrooms":"0",
//     "bathrooms":"1",
//     "size":"500 sq ft",
//     "img":"./images/lexington.jpg",
//     "info":"Great sized studio apartments"
// }
// {
//     id: 5,
//     aptname: "Lake Pointe",
//     apttown :"St. Paul",
//     price :"850",
//     bedrooms :"1",
//     bathrooms :"1",
//     size: "650 sq ft",
//     img: "./images/lakepointe.jpg",
//     info: "Great, single unit homes"
// }
