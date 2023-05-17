create database if not exists capivair;
use capivair; 
drop database capivair;

create table if not exists empresa (
cnpj int not null,
nome varchar(45) not null,
email varchar(45) unique not null,
telefone numeric(11) unique not null,
endereco text not null,
senha varchar(20) not null, 
primary key(cnpj)
);

describe empresa;
drop table empresa;

insert into empresa values
(11111111, 'ALCAN PACKAGING BEAUTY', 'alcan@gmail.com', 8112345678, 'Rua', 'senha'),
(22222222, 'AMANCO', 'amanco@gmail.com', 8112345677, 'Rua', 'senha'),
(33333333, 'BRASALPLA', 'brasalpha@gmail.com', 8112345666, 'Rua', 'senha'),
(44444444, 'BRASILGÁS', 'brasilgas@gmail.com', 8112345555, 'Rua', 'senha'),
(55555555, 'CAMPARI', 'campari@gmail.com', 8112344444, 'Rua', 'senha');

select * from empresa;
