# Padrão Front End


## Resumo

Validar, compilar, minificar, otimizar imagens e enviar tudo isso para o ambiente de produção são tarefas repetitivas. Utilizando o Grunt para automatizar toda essa parte chata, você fica só com a parte legal de desenvolver.


**Instalação**

```sh
***Clone o repositório***
$ git clone git://github.com/brunogallo/padrao-front-end.git novo_projeto
$ cd novo_projeto

***instale as dependencias***
$ sudo npm install
$ gem install compass
$ gem install bourbon
$ gem install breakpoint
$ gem install jeet
```


**Tasks**

- `grunt dev`: Inicializa browsersync e watch, com inspeção do jshint e csslint.
- `gulp dist`: Gera o projeto completo para fazer deploy.
- `gulp deploy`: Realiza deploy.
- `gulp compress`: Comprime todos os arquivos dev e deploy.


**Bibliotécas**

[Jeet](http://jeet.gs/) - Sistema de Grids.<br>
[Breakpoints](http://breakpoint-sass.com/) - Media Queries.<br>
[Compass](http://compass-style.org/index/) - Mixins, Funções e Vars.


## Otimizar imagens

Uma dica importante é utilizar **.jpgs** com **1.5x** o tamanho a ser mostrado, com **65-75% de qualidade**, **progressivos e otimizados com um algoritmo lossless**. 


## Otimizar servidor

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


## Contribua

####Você pode contribuir

1. Crie um fork!
2. Crie uma branch para a sua nova funcionalidae: `git checkout -b nova-funcionalidade`
3. Dê Commit com as suas modificações: `git commit -m 'Nova funcionalidade'`
4. Dê Push na branch: `git push origin nova-funcionalidade`
5. Envie um pull request


## Licença

[Licença MIT](https://github.com/brunogallo/padrao-front-end/blob/master/LICENSE)