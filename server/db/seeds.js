use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Bob",
    email: "Bob@Hotmail.com",
    checkin_status: true
  },
  {
    name: "Mary",
    email: "Mary@Hotmail.com",
    checkin_status: true
  },
  {
    name: "Jim",
    email: "Jim@Hotmail.com",
    checkin_status: false
  }

]);
