CREATE TABLE "user"
(
    id          serial      NOT NULL PRIMARY KEY,
    "firstName" varchar(40) NOT NULL,
    "lastName"  varchar(40) NOT NULL,
    email       varchar(80) NOT NULL,
    password    varchar(40) NOT NULL,
    phone       integer     NOT NULL,
    "isAdmin"   boolean     NOT NULL
);

CREATE TABLE "vehicleType"
(
    id   serial      NOT NULL PRIMARY KEY,
    type varchar(80) NOT NULL
);

CREATE TABLE state
(
    abbreviation char(2)     NOT NULL PRIMARY KEY,
    name         varchar(40) NOT NULL
);

CREATE TABLE "driver"
(
    id              serial      NOT NULL PRIMARY KEY,
    "userId"        integer     NOT NULL
        CONSTRAINT driver_user_id_fk
            REFERENCES "user",
    "licenseNumber" varchar(40) NOT NULL,
    "licenseState"  char(2)     NOT NULL
        CONSTRAINT driver_state_abbreviation_fk
            REFERENCES state
);

CREATE TABLE vehicle
(
    id              serial           NOT NULL PRIMARY KEY,
    make            varchar(40)      NOT NULL,
    model           varchar(40)      NOT NULL,
    color           varchar(40)      NOT NULL,
    "vehicleTypeId" integer          NOT NULL
        CONSTRAINT "vehicle_vehicleType_id_fk"
            REFERENCES "vehicleType",
    capacity        integer          NOT NULL,
    mpg             double precision NOT NULL,
    "licenseState"  char(2)          NOT NULL
        CONSTRAINT vehicle_state_abbreviation_fk
            REFERENCES state,
    "licensePlate"  varchar(40)      NOT NULL
);

CREATE TABLE "authorization"
(
    "driverId"  integer NOT NULL
        CONSTRAINT authorization_driver_id_fk
            REFERENCES "driver",
    "vehicleId" integer NOT NULL
        CONSTRAINT authorization_vehicle_id_fk
            REFERENCES vehicle,
    CONSTRAINT authorization_pk
        PRIMARY KEY ("vehicleId", "driverId")
);

CREATE TABLE location
(
    id        serial      NOT NULL
        CONSTRAINT location_pk
            PRIMARY KEY,
    name      varchar(40) NOT NULL,
    address   varchar(80) NOT NULL,
    city      varchar(40) NOT NULL,
    state     char(2) NOT NULL
        CONSTRAINT location_state_abbreviation_fk
            REFERENCES state,
    "zipCode" varchar(40) NOT NULL
);

CREATE TABLE ride
(
    id                 serial           NOT NULL PRIMARY KEY,
    date               date             NOT NULL,
    "numberPassengers" integer          NOT NULL,
    time               time             NOT NULL,
    distance           double precision NOT NULL,
    "fuelPrice"        double precision NOT NULL,
    fee                double precision NOT NULL,
    charge             double precision NOT NULL,
    "vehicleId"        integer          NOT NULL
        CONSTRAINT ride_vehicle_id_fk
            REFERENCES vehicle,
    "fromLocationId"   integer          NOT NULL
        CONSTRAINT ride_location_id_fk
            REFERENCES location,
    "toLocationId"     integer          NOT NULL
        CONSTRAINT ride_location_id_fk_2
            REFERENCES location
);

CREATE TABLE "passenger"
(
    "passengerId" integer NOT NULL
        CONSTRAINT passenger_user_id_fk
            REFERENCES "user",
    "rideId"      integer NOT NULL
        CONSTRAINT passenger_ride_id_fk
            REFERENCES ride,
    CONSTRAINT passenger_pk
        PRIMARY KEY ("passengerId", "rideId")
);

CREATE TABLE "drivers"
(
    "driverId" integer NOT NULL
        CONSTRAINT drivers_driver_id_fk
            REFERENCES "driver",
    "rideId"   integer NOT NULL
        CONSTRAINT drivers_ride_id_fk
            REFERENCES ride,
    CONSTRAINT drivers_pk
        PRIMARY KEY ("driverId", "rideId")
);
