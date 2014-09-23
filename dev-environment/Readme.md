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


Por padrão, o grunt publica os arquivos compilados com "grunt stage" dentro da pasta var/www/.


## Especificações do ambiente

Todas os ambientes foram configurados com alguns valores padrões:

- ***Usuários:*** padrao
- ***Senhas:*** padrao
- ***Memória:*** 1GB
- ***IP:*** 192.168.56.101
- ***Porta box:*** 22
- ***Porta Apache:*** 80
- ***Porta host:***	8623
- ***Pasta compartilhada:*** /www Apontada para: /var/www
- ***Modulos Apache:*** rewrite, mod_pagespeed.
- ***Servername:*** padrao
- ***Server Alias:*** brunogallo.com


Sistema Operacional|Modulos|Caminho|
--------|--------|--------|--------|
Ubuntu Precise 12.04 LTS x64|PHP, Apache, MySQL, Rsync|/ubuntu|


## Possiveis erros e soluções

- ***Warning: Insecure world writable dir /usr/local in PATH*** - ***Solução:*** sudo chmod 775 /usr/local


## Quer me ajudar?

***Implementações pendentes***

- ***Vivenciando o deploy antes do deploy***	- http://www.youtube.com/watch?v=sPqbYfmo0ec
- ***APP Trafic replay*** - https://github.com/buger/gor/