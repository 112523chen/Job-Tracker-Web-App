CREATE TABLE applications (
    id SERIAL primary key,
    title varchar,
    company varchar,
    created timestamptz,
    modified timestamptz,
    status varchar,
    url varchar,
    description varchar
);