create table "user"
(
    id          serial      not null
        constraint user_pk
            primary key,
    "firstName" varchar(40) not null,
    "lastName"  varchar(40) not null,
    email       varchar(80) not null,
    password    varchar(40) not null,
    phone       integer     not null,
    "isAdmin"   boolean     not null
);

create table "vehicle type"
(
    id   serial      not null
        constraint "vehicle type_pk"
            primary key,
    type varchar(80) not null
);

create table state
(
    abbreviation serial      not null
        constraint "vehicle type _pk"
            primary key,
    name         varchar(40) not null
);

create table "Driver"
(
    id              serial      not null
        constraint driver_pk
            primary key,
    "userId"        integer     not null
        constraint driver_user_id_fk
            references "user",
    "licenseNumber" varchar(40) not null,
    "licenseState"  integer     not null
        constraint driver_state_abbreviation_fk
            references state
);

create table vehicle
(
    id              serial           not null
        constraint vehicle_pk
            primary key,
    make            varchar(40)      not null,
    model           varchar(40)      not null,
    color           varchar(40)      not null,
    "vehicleTypeId" integer          not null
        constraint "vehicle_vehicle type_id_fk"
            references "vehicle type",
    capacity        integer          not null,
    mpg             double precision not null,
    "licenseState"  integer          not null
        constraint vehicle_state_abbreviation_fk
            references state,
    "licensePlate"  varchar(40)      not null
);

create table "authorization"
(
    "driverId"  integer not null
        constraint authorization_driver_id_fk
            references "Driver",
    "vehicleId" integer not null
        constraint authorization_vehicle_id_fk
            references vehicle,
    constraint authorization_pk
        primary key ("vehicleId", "driverId")
);

create table location
(
    id        serial      not null
        constraint location_pk
            primary key
        constraint location_state_abbreviation_fk
            references state,
    name      varchar(40) not null,
    address   varchar(80) not null,
    city      varchar(40) not null,
    state     varchar(40) not null,
    "zipCode" varchar(40) not null
);

create table ride
(
    id                 serial           not null
        constraint ride_pk
            primary key,
    date               date             not null,
    "numberPassengers" integer          not null,
    time               time             not null,
    distance           double precision not null,
    "fuelPrice"        double precision not null,
    fee                double precision not null,
    charge             double precision not null,
    "vehicleId"        integer          not null
        constraint ride_vehicle_id_fk
            references vehicle,
    "fromLocationId"   integer          not null
        constraint ride_location_id_fk
            references location,
    "toLocationId"     integer          not null
        constraint ride_location_id_fk_2
            references location
);

create table "Passenger"
(
    "passengerId" integer not null
        constraint passenger_user_id_fk
            references "user",
    "rideId"      integer not null
        constraint passenger_ride_id_fk
            references ride,
    constraint passenger_pk
        primary key ("passengerId", "rideId")
);

create table "Drivers"
(
    "driverId" integer not null
        constraint drivers_driver_id_fk
            references "Driver",
    "rideId"   integer not null
        constraint drivers_ride_id_fk
            references ride,
    constraint drivers_pk
        primary key ("driverId", "rideId")
);


