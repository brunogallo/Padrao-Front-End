#ambiente de desenvolvimento

## Resumo e instalação

O Vagrant é utilizado como ambiente de desenvolvimento interno.
Imagino que você já tem o **Vagrant** instalado na sua máquina. Para utilizá-lo execute os seguintes comandos:

```
git clone https://github.com/brunogallo/padrao-front-end.git padrao-front-end
cd padrao-front-end/dev-environment
```


Inicializando o ambiente:

```
vagrant up
```


## Especificações do ambiente




## Possiveis erros e soluções

- **warning: Insecure world writable dir /usr/local in PATH**
- **Solução:** sudo chmod 775 /usr/local