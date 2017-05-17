
Plane.destroy_all

plane1 = Plane.create(name: 747,row: 100,col: 5);
plane2 = Plane.create(name: 787,row: 20,col: 3);
plane3 = Plane.create(name: 370,row: 7,col: 5);

puts Plane.count

Flight.destroy_all

f1 = Flight.create(plane_id: 17, origin: "SYD", destination:"BNE",date: DateTime.parse("03/05/2017 13:00"));
f2 = Flight.create(plane_id: 45, origin:"LAX", destination:"SFO", date: DateTime.parse("04/08/2015 17:00"));
f3 = Flight.create(plane_id: 70, origin:"SFO", destination:"JFK", date: DateTime.parse("08/04/2015 17:00"));
f4 = Flight.create(plane_id: 27, origin:"SYD", destination:"IST", date: DateTime.parse("14/3/2015 17:00"));
f5 = Flight.create(plane_id: 88, origin:"SYD", destination:"LHR", date: DateTime.parse("04/5/2015 17:00"));


puts Flight.count

User.destroy_all

u1 = User.create(name: 'Matt')
u2 = User.create(name: 'Chris')
u3 = User.create(name: 'Fiona')
u4 = User.create(name: 'JJ')

puts User.count

Reservation.destroy_all

r1 = Reservation.create(date: DateTime.parse("03/05/2017 13:00"), flight_id: f1.id, user_id: u1.id, row: 1, col: "A");
r2 = Reservation.create(date: DateTime.parse("03/05/2017 13:00"), flight_id: f2.id, user_id: u2.id, row: 2, col: "B");
r3 = Reservation.create(date: DateTime.parse("03/05/2017 13:00"), flight_id: f3.id, user_id: u3.id, row: 4, col: "C");
r4 = Reservation.create(date: DateTime.parse("03/05/2017 13:00"), flight_id: f1.id, user_id: u4.id, row: 4, col: "D");

p Reservation.count
