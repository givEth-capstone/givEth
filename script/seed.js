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
      walletId: 'abc123', 
      location: 'Haiti',
      needed: 20,
      info: 'The earthquake has displaced many victims. Donate to support.',
      photoUrl: photo,
      tag: 'Emergency',
      status: true
    }),

    Campaign.create({ 
      name: 'Rebuild the school',
      walletId: 'efg123', 
      location: 'Brooklyn',
      needed: 10,
      info: 'The school caught on fire. Please help us get new furniture.',
      photoUrl: photo,
      tag: 'Education',
      status: true
    }),
    Campaign.create({ 
      name: 'Help me pay my hospital bills',
      walletId: 'hij123', 
      location: 'Queens',
      needed: 30,
      info: 'Due to the coronavirus, I have been in and out of the hospital. I lost my job also and have no health insurance. Please help me pay off my hospital debt.',
      photoUrl: photo,
      tag: 'Medical',
      status: true
    }),
    Campaign.create({
      name: 'Plane tickets for refugees',
      walletId: 'hij123', 
      location: 'Global',
      needed: 40,
      info: 'We are trying to help refugees of global crises reunite with their families. Please donate so we can get them plane tickets!',
      photoUrl: photo,
      tag: 'Emergency',
      status: true
    }),
    Campaign.create({
      name: 'Temporary housing for flood victims',
      walletId: 'hij123', 
      location: 'Tennessee',
      needed: 40,
      info: 'Many people lost their homes in the devastating floods recently. Please help them to pay for temporary housing while they get back on their feet.',
      photoUrl: photo,
      tag: 'Emergency',
      status: true
    })
  ])
  const [EarthquakeVictims, RebuildSchool, HospitalBills, PlaneTickets, FloodHousing] = campaigns;

  await Nicky.addCampaign(EarthquakeVictims)
  await Amber.addCampaign(RebuildSchool)
  await Rachel.addCampaign(HospitalBills)
  await Farha.addCampaign(PlaneTickets)
  await Nicky.addCampaign(FloodHousing)

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  // return {
  //   // users: {
  //   //   cody: users[0],
  //   //   murphy: users[1]
  //   // }
  // }
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
