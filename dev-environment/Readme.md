#Ambiente de desenvolvimento

## Resumo e instalação

O [Vagrant](http://vagrantup.com/) é um projeto que permite virtualizar o ambiente de desenvolvimento de forma simples. 
[Documentação oficial](https://docs.vagrantup.com/v2/)


###Instalação

Atenção, os passos abaixo são feito através do terminal, caso necessite de uma interface ui recomento outro tutorial.

- Faça o download e a instalação do VirtualBox [aqui](http://virtualbox.org/wiki/Downloads).
- Faça o download e a instalação do Vagrant [aqui](https://www.vagrantup.com/downloads).

Após a instalação, navegue até a pasta "dev-environment/sistema-operacional" do repositório. No exemplo abaixo eu utilizo o ubuntu:

```
cd padrao-front-end/dev-environment/ubuntu
```


###Inicializando o ambiente:


```
vagrant up
```

Na primeira inicialização será feito o download da imagem do ambiente.


###Comandos básicos

- ***vagrant up*** 			- Inicia o ambiente.
- ***vagrant halt***		- Força o ambiente a desligar (Não recomendado).
- ***vagrant suspend***		- Suspende o ambiente.
- ***vagrant ssh***			- Conecta via ssh.
- ***vagrant update***	- Atualiza o vagrant.
- ***vagrant list***		- Lista ambientes.
- ***vagrant provision***	- Caso faça alguma alteração no "puphpet/config.yaml" o comando atualiza.


Por padrão, o grunt publica os arquivos compilados com "grunt stage" dentro da pasta var/www/.


###Web server

A task stage configurada no grunt envia os arquivos compilados para o ambiente de teste.
Caso seja necessário alterações de forma manual, os arquivos devem ser colocados em: "dev-environment/sistema-operacional/www".

***URL*** - http://192.168.56.101/


###MySQL

- ***DB User:*** padrao
- ***DB PW:*** padrao
- ***DB:*** padrao

***URL*** - http://192.168.56.101/adminer/


## Especificações do ambiente

Todas os ambientes foram configurados com alguns valores padrões:

- ***Usuários:*** padrao
- ***Senhas:*** padrao
- ***Memória:*** 1GB
- ***Local VM CPU's***: 1
- ***IP:*** 192.168.56.101
- ***Porta box:*** 22
- ***Porta Apache:*** 80
- ***Pasta compartilhada:*** /www Apontada para: /var/www
- ***Modulos Apache:*** rewrite, mod_pagespeed.
- ***Servername:*** padrao
- ***Server Alias:*** brunogallo.com


Sistema Operacional|Modulos|Caminho|
--------|--------|--------|--------|
Ubuntu Trusty 14.04 LTS x64|PHP, Xdebug, Apache, MySQL, Nodejs, Adminer, Rsync, MailCatcher|/ubuntu|


## Possiveis erros e soluções

- ***Warning: Insecure world writable dir /usr/local in PATH*** - ***Solução:*** sudo chmod 775 /usr/local


## Quer me ajudar?

***Implementações pendentes***

- ***Vivenciando o deploy antes do deploy***	- http://www.youtube.com/watch?v=sPqbYfmo0ec
- ***APP Trafic replay*** - https://github.com/buger/gor/