// import models
const Traveler = require('./Traveler');
const Location = require('./Location');
const Trip = require('./Trip');


//A trip will reference both of them (that is your join table

//A Traveller will belongs to many Locations (through Trip)
Traveler.belongsToMany( Location, { 
  through: {
    model: Trip,
    unique: false,
  },
  as: 'planned_trips',
})
//Location will belongs to many Travellers (through Trip)
Location.belongsToMany(Traveler, { 
  through: {
    model: Trip,
    unique: false
  },
  as: 'location_travellers'
})

module.exports = {
  Traveler,
  Location,
  Trip,
};
