'use strict'

const {db, models: {User, Campaign} } = require('../server/db')

const photo = 'https://www.pngitem.com/pimgs/m/145-1450643_providing-encouragement-and-support-to-help-people-icon.png'

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')


// Creating Users
const users = await Promise.all([
  User.create({
    username: "Nicky",
    password: "123",
  }),
  User.create({
    username: "Farha",
    password: "123",
  }),
  User.create({
    username: "Amber",
    password: "123",
  }),
  User.create({
    username: "Rachel",
    password: "123",
  }),
])
const [Nicky, Farha, Amber, Rachel] = users;
// Creating Campaigns
  const campaigns = await Promise.all([
    Campaign.create({ 
      name: 'Support earthquake victims',
      walletId: '0x309608B5649407f9865Bc95B44475909B77BBEE9', 
      location: 'Haiti',
      needed: 7,
      info: 'The earthquake has displaced many victims. Donate to support.',
      photoUrl: '/assets/earthquake.jpg',
      tag: 'Emergency',
      status: true,
      received: 2
    }),

    Campaign.create({ 
      name: 'Rebuild the school',
      walletId: '0x1D1c5410C8A96d62Af3fF02A158FcA44A0336517', 
      location: 'Brazil',
      needed: 6,
      info: 'It has been a long time since our school has received new furniture. Please help us in trying to make the school more comfortable for our children.',
      photoUrl: '/assets/school.jpg',
      tag: 'Education',
      status: true
    }),
    Campaign.create({ 
      name: 'Help me pay my hospital bills',
      walletId: '0x336eac30F175ea91cC78445E7dDb8E14c7312B9d', 
      location: 'Queens',
      needed: 5,
      info: 'Due to the coronavirus, I have been in and out of the hospital. I lost my job also and have no health insurance. Please help me pay off my hospital debt.',
      photoUrl: '/assets/hospital.jpg',
      tag: 'Medical',
      status: true
    }),
    Campaign.create({
      name: 'Plane tickets for refugees',
      walletId: '0xB0BA04CAbA844f4094207B6577DB603002F61125', 
      location: 'Global',
      needed: 3,
      info: 'We are trying to help refugees of global crises reunite with their families. Please donate so we can get them plane tickets!',
      photoUrl: '/assets/plane.jpg',
      tag: 'Emergency',
      status: true
    }),
    Campaign.create({
      name: 'Temporary housing for flood victims',
      walletId: '0x200E547fc82208014850E4b75959C96B6a6273BE', 
      location: 'United Kingdom',
      needed: 2,
      info: 'Many people in our city recently lost their homes due to a devastating flood. Please help us pay for temporary housing while we get back on their feet.',
      photoUrl: '/assets/flood.jpg',
      tag: 'Emergency',
      status: false
    }),
    Campaign.create({
      name: 'Safe shelther for LGBTQ youth',
      walletId: '0xA809dC9335f4ADDD26AED1A94a553ea054aFA7b2', 
      location: 'Kabul',
      needed: 4,
      info: 'We are trying to raise money to continue running our safe shelter for homeless and struggling LGBTQ youth in our city. Please donate to keep us safe!',
      photoUrl: '/assets/lgbtq.jpg',
      tag: 'Emergency',
      status: false
    }),
    Campaign.create({
      name: 'Wild Elephant Fund',
      walletId: '0xb33BE91f31f76a9d50fFBba7B500fE040F29089b', 
      location: 'Botswana',
      needed: 2,
      info: 'We are in need of funds to help rehabilitate and protect the wild elephants in our area that have been targeted by poachers.',
      photoUrl: '/assets/elephants.jpg',
      tag: 'Community',
      status: true
    }),
    Campaign.create({
      name: 'Food for Children',
      walletId: '0x20eab58cEb24b63b330bB9ef20bA9aD685fbCdAC', 
      location: 'USA',
      needed: 3,
      info: '1 in 3 children go to bed without dinner. Please donate to help us continue providing free school lunches to children who need it.',
      photoUrl: '/assets/children.jpg',
      tag: 'Hunger',
      status: false
    }),
  ])
  const [EarthquakeVictims, RebuildSchool, HospitalBills, PlaneTickets, FloodHousing, LGBTShelter, WildElephant, FoodChildren] = campaigns;

  await Nicky.addCampaign(EarthquakeVictims)
  await Amber.addCampaign(RebuildSchool)
  await Rachel.addCampaign(HospitalBills)
  await Farha.addCampaign(PlaneTickets)
  await Nicky.addCampaign(FloodHousing)
  await Nicky.addCampaign(LGBTShelter)
  await Nicky.addCampaign(WildElephant)
  await Amber.addCampaign(FoodChildren)

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  
}


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
