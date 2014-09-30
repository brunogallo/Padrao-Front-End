# Padrão Front End


## Resumo

Validar, compilar, minificar, otimizar imagens e enviar tudo isso para o ambiente de produção são tarefas repetitivas. Utilizando o Grunt para automatizar toda essa parte chata, você fica só com a parte legal de desenvolver.


## Instalação

Imagino que você já tem o **Grunt** instalado na sua máquina. Para utilizá-lo execute os seguintes comandos:

```
git clone https://github.com/brunogallo/padrao-front-end.git padrao-front-end
cd padrao-front-end
```

Copie os arquivos package.json e Gruntfile.js para a pasta do seu projeto e instale os plugins do Grunt usando o seguinte comando dentro da pasta:

```
npm install
```

Após a instalação, edite o Gruntfile.js para atender as necessidades de cada projeto. Altere a variável paths, por exemplo, para adequar o arquivo à estrutura do seu projeto.


## Browser suporte

* IE7, IE8, IE9, IE10, IE11, IE Mobile 10
* FF 30, 31
* Chrome 34, 35
* Safari 7, 8
* Opera 23, 24
* iOS Safari 7, 8
* Opera Coast
* Android / Chrome 4.4, 4.4.3
* BlackBerry 10


## Plugins utilizados

- **uglify** 			- Minifica todos os .js
- **cssmin** 			- Minifica todos os .css
- **htmlmin** 			- Minifica todos os .html
- **imagemin** 			- Minifica as imagens .jpg, .png e .gif
- **uncss** 			- Deleta todos os estilos não usados pelo html
- **clean** 			- Deleta todos os arquivos antes de compilar
- **sass** 				- Compila os arquivos scss
- **watch** 			- Procura alterações em tempo real
- **pageres** 			- Tira print das páginas do site nas resoluções indicadas
- **browsersync**		- Sincroniza browsers em tempo real
- **jshint**			- Valida os códigos js
- **validation**		- Valida os códigos html
- **copy**				- Copia arquivos estáticos para a pasta desejada
- **rsync**				- Sincroniza com o servidor ftp


## Utilização

***Ambientes***

É necessário especificar em qual ambiente a tarefa será aplicada, por exemplo:<br>
Aplicação em um ambiente: grunt build:**ambiente**

- **:deploy**				- Para produção /deploy
- **:dev**				- Para desenvolvimento /dev
- [Clique aqui](app/env/Readme.md) - Também é possível utilizar com vagrant.


***Tarefas***

- **grunt compile**		- Compila os arquivos .scss
- **grunt minify**		- Minifica o html, css, js e optimiza as imagens
- **grunt build**			- Executa as tarefas de minificar, limpar o diretório e compilar
- **grunt print**			- Tira print das páginas nas principais resoluções e também mobile
- **grunt validate**		- Valida o código dos arquivos js e html
- **grunt live**			- Sincroniza browser com diferentes dispositivos
- **grunt copy**		- Copia arquivos estáticos para a pasta desejada


***SASS***

- [Mixins](/docs/mixins.md)
- [Funções](/docs/funcoes.md)
- [Add-ons](/docs/addons.md)
- [Configuração](/docs/configuracao.md)


## Otimizando o servidor


A lista de configurações abaixo são do projeto [HTML5 Boilerplate (H5BP)][9].

- **[Apache][5]**
- **[Google App Engine (GAE)][6]**
- **[Nginx][7]**
- **[Node.js][8]**
- **[Google Cloud Storage (GCS)][1]**<br>
Please, follow [Configuring a Bucket as a Website][2] guide on the GCS documentation pages.
- **[Amazon Web Services (AWS) S3][3]**<br>
Please, follow [Hosting a Static Website on Amazon S3][4] guide on the AWS S3 documentation pages.

[1]: https://cloud.google.com/products/cloud-storage/
[2]: https://developers.google.com/storage/docs/website-configuration
[3]: http://aws.amazon.com/s3/
[4]: http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html
[5]: https://github.com/h5bp/server-configs-apache
[6]: https://github.com/h5bp/server-configs-gae
[7]: https://github.com/h5bp/server-configs-nginx
[8]: https://github.com/h5bp/server-configs-node
[9]: http://html5boilerplate.com/


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
