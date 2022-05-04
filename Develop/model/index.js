// import models
const Traveler = require('./Traveler');
const Location = require('./Location');
const Trip = require('./Trip');


//A trip will reference both of them (that is your join table

//A Traveller will belongs to many Locations (through Trip)
Traveler.belongsToMany( Location, { 
  through: Trip,
  foreignKey: 'location_id',
})
//Location will belongs to many Travellers (through Trip)
Location.belongsToMany(Traveler, { 
  through: Trip,
  foreignKey: 'traveller_id',
})

module.exports = {
  Traveler,
  Location,
  Trip,
  TripLocation,
};
