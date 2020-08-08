const faker = require('faker');

var nameNouns = ['Luxurious','Enchanting','New!', 'Luxury', 'Awesome', 'Cozy', 'Warm', 'Spacious', 'Upscale', 'Gorgeous', 'Unforgettable', 'Traditional', 'Magical', 'Private', 'Exclusive','Modern'];

var houseType = ['Barn','Condo','House','Bungalow', 'Loft', 'Beach House', 'Guesthouse', 'Guest Suite', 'Cottage', 'Resort', 'Mountain View Home', 'Castle', 'Cabin', 'Treehouse', 'Apartment', 'Clif-Side House', 'Mansion' ];

var amenities = ['With Patio', 'With Ocean View', 'With Hot Tub', 'w/ Boathouse', 'With Magistic Mountain View', 'With City View', 'in a Quiet Neighborhood', '10 mins away from major attractions', 'w/ Panoramic View', 'With Pool', 'With Wifi/Netflix' ];

var locations = ['San Francisco, California, United States', 'Los Angles, California, United States', 'Gardena, California, United States', 'Wimberley, Texas, United States', 'Austin, Texas, United States', 'Jersey City, New Jersey, United States', 'Seattle, Washington, United States', 'Vashon, Washington, United States', 'Avondale, Arizona, United States', 'Upper Hominy, North Carolina, United States', 'Hollywood, California, United States', 'Salinas, California, United States', 'Seaside, California, United States', 'Houston, Texas, United States', 'Nipomo, California, United States', 'Woodside, California, United States', 'Santa Cruz, California, United States', 'Watsonville, California, United States', 'South Lake Tahoe, California, United States'];

var captions = ['','','', '','Beautiful setting you cannot forget','','','', 'Amazing views from inside','', '', '', '', '', 'Breath taking views', '', '', '', 'Interoir of your dreams' , '', '', 'This could be you',  '', '', '', 'Brand new interiors'];

var pictures = ['https://homepictures.s3-us-west-1.amazonaws.com/image10.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image1.jpg','https://homepictures.s3-us-west-1.amazonaws.com/image11.jpg','https://homepictures.s3-us-west-1.amazonaws.com/image12.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image13.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image14.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image15.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image2.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image3.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image4.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image5.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image6.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image7.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image8.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/image9.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa1.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa10.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa11.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa2.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa3.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa4.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa5.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa6.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa7.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa8.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/villa9.jpg'];

module.exports = {

  randomIdx: (array) => {
    var length = array.length;
    var idx = Math.floor(Math.random() * (length));
    return idx;
  },
  randomNum: (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  randomListingName: () => {
    var idx = module.exports.randomIdx(nameNouns)
    var randomNameNouns = nameNouns[module.exports.randomIdx(nameNouns)];
    var randomHouseType = houseType[module.exports.randomIdx(houseType)];
    var randomAmenities = amenities[module.exports.randomIdx(amenities)];
    // return randomNameNouns;
    return (`${randomNameNouns} ${randomHouseType} ${randomAmenities}`);
  },

  superHost: () => {
    var hostStatus = ['Superhost', 'host']
    return hostStatus[module.exports.randomNum(0,1)];
  },

  randomLocation: () => {
    var location = locations[module.exports.randomIdx(locations)];
    return location;
  },

  randomPictures: () => {
    var picture = pictures[module.exports.randomIdx(pictures)];
    return picture;
  },

  randomCaptions: () => {
    var caption = captions[module.exports.randomIdx(captions)];
    return caption;
  }
}

// console.log(module.exports.randomIdx(houseType));
// console.log(module.exports.randomLocation());