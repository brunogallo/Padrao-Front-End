# Padrão Front End


## Resumo e instalação

Validar, compilar, minificar, otimizar imagens e enviar tudo isso para o ambiente de produção são tarefas repetitivas. Utilizando o Grunt para automatizar toda essa parte chata, você fica só com a parte legal de desenvolver.

Imagino que você já tem o **Grunt** instalado na sua máquina. Para utilizá-lo execute os seguintes comandos:

```
git clone https://github.com/brunogallo/padrao-front-end.git padrao-front-end
cd padrao-front-end
```

Copie os arquivos package.json e Gruntfile.js para a pasta do seu projeto e instale os plugins do Grunt usando o seguinte comando dentro da pasta:

```
npm install
```

Após a instalação, edite o Gruntfile.js para atender as necessidades de cada projeto. Altere a variável paths, por exemplo, para adequar o arquivo à estruturação do seu projeto. Altere também o package.json, trocando para as suas informações.


## Plugins utilizados

- **uglify** 		- Minifica todos os .js
- **cssmin** 		- Minifica todos os .css
- **htmlmin** 		- Minifica todos os .html
- **imagemin** 		- Minifica as imagens .jpg, .png e .gif
- **uncss** 		- Deleta todos os estilos não usados pelo html
- **clean** 		- Deleta todos os arquivos antes de compilar
- **sass** 			- Compila os arquivos scss
- **watch** 		- Procura alterações em tempo real
- **pageres** 		- Tira print das páginas do site nas resoluções indicadas
- **browsersync**	- Sincroniza browsers em tempo real


## Ambiente de testes

Cria servidor local para testes no browser.

```
grunt live
```


## Práticas para utilização

#### Otimizar imagens
Uma dica importante é utilizar **.jpgs** com **1.5x** o tamanho a ser mostrado, com **65-75% de qualidade**, **progressivos e otimizados com um algoritmo lossless**. 


## Contribua

####Você pode contribuir

1. Crie um fork!
2. Crie uma branch para a sua nova funcionalidae: `git checkout -b nova-funcionalidade`
3. Dê Commit com as suas modificações: `git commit -m 'Nova funcionalidade'`
4. Dê Push na branch: `git push origin nova-funcionalidade`
5. Envie um pull request

## Licença

[Licença MIT](https://github.com/brunogallo/padrao-front-end/blob/master/LICENSE)
