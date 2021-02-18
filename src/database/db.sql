-- install extension pgcrypto and use it for password: crypt('jubajuba', gen_salt('bf'))

create extension "pgcrypto";

create table users(
	id serial not null primary key,
	username varchar(40) not null,
	password varchar(60) not null,
	fullname varchar(200) not null
);

insert into users(username, password, fullname) values('ali', crypt('123', gen_salt('bf')), 'Ali Valiyev');
