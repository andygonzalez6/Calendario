-- initDB.sql

-- Create User table
CREATE TABLE IF NOT EXISTS "Users" (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- Create Event table
CREATE TABLE IF NOT EXISTS Event (
    EventID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    StartDateTime TIMESTAMPTZ NOT NULL,
    EndDateTime TIMESTAMPTZ NOT NULL,
    Location VARCHAR(255),
    Allday BOOLEAN DEFAULT false,
    FOREIGN KEY (UserID) REFERENCES "users"(UserID)
);

-- Create Schedule table
CREATE TABLE IF NOT EXISTS Schedule (
    ScheduleID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    ColorCode VARCHAR(7)
        CHECK (ColorCode ~ '^#[0-9A-Fa-f]{6}$'),
    FOREIGN KEY (UserID) REFERENCES "users"(UserID)
);

-- Create EventScheduleMapping table
CREATE TABLE IF NOT EXISTS EventScheduleMapping (
    EventScheduleID SERIAL PRIMARY KEY,
    EventID INT NOT NULL,
    ScheduleID INT NOT NULL,
    FOREIGN KEY (EventID) REFERENCES Event(EventID),
    FOREIGN KEY (ScheduleID) REFERENCES Schedule(ScheduleID)
);

CREATE TABLE IF NOT EXISTS sessions (
  sid VARCHAR PRIMARY KEY,
  sess JSON NOT NULL,
  expire TIMESTAMPTZ NOT NULL
);