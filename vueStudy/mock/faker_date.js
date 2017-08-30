module.exports = function() {
	var faker = require('faker');
	faker.locale = "zh_CN";
	var _ = require("lodash");
 return {
     people: _.times(100, function (n) {
         return {
             id: n,
             name: faker.name.findName(),
             avatar: faker.internet.avatar()
         }
     }),
     address: _.times(100, function (n) {
         return {
             id: faker.random.uuid(),
             city: faker.address.country(),
             county: faker.address.countryCode()
         }
     }),
		 user: {
			 name: faker.name.findName(),
	      email: faker.internet.email(),
	      website: faker.internet.url(),
	      address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
	      bio: faker.lorem.sentences(),
	      image: faker.image.avatar()
		 }
 }
 }
