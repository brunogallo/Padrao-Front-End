## Grid Responsivo

Precisamos configurar algumas opções no settings/_settings.scss

```
$columns: 12; // Numero de colunas
$column-width: 60; // Tamanho das colunas baseado em 960px
$gutter-width: 20; // Espaço entre as colunas
$total-width: 100%; // Define se o layout será baseado em px ou %, para layouts fixos comentar a linha.
```


### Utilizando o grid

*** Responsivo ***

```
article {
	@include column(9);
}

section {
	@include column(3);
}

@media screen and (max-width: 720px) {
	article {
		@include column(12);
	}

	section {
		@include column(12);
	}
}
```


Baseado no: [Semantic Grid System](http://semantic.gs)
