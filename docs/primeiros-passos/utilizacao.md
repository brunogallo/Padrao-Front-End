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