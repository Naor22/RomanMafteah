create schema if not exists `romanmafteah`;

DROP USER IF EXISTS 'romanmafteah'@'%';
CREATE USER 'romanmafteah'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL privileges ON romanmafteah.* TO 'romanmafteah'@'%';
FLUSH PRIVILEGES;
