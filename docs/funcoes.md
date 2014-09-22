# Funções
Algumas funções são baseadas na biblioteca do [bourbon](http://bourbon.io/).


#### Flex-grid
Essa função cria um grid flexível.

```css
$fg-column: 60px;             // Column Width
$fg-gutter: 25px;             // Gutter Width
$fg-max-columns: 12;          // Total Columns For Main Container

div {
  width: flex-grid(4);        // returns (315px / 1020px) = 30.882353%;
  margin-left: flex-gutter(); // returns (25px / 1020px) = 2.45098%;

  p {
    width: flex-grid(2, 4);   // returns (145px / 315px) = 46.031746%;
    float: left;
    margin: flex-gutter(4);   // returns (25px / 315px) = 7.936508%;
  }

  blockquote {
    float: left;
    width: flex-grid(2, 4);   // returns (145px / 315px) = 46.031746%;
  }
}
```



#### Golden-ratio
Retorna o golden ratio de um número fornecido. Pixel para o primeiro valor. Valor integer para incremento e decremento: ...-3, -2, -1, 0, 1, 2, 3...

```css
// Número positivo da incremento.
font-size: golden-ratio(14px,  1);
// returns: 22.652px

// Número negativo da decremento.
font-size: golden-ratio(14px, -1);
// returns: 8.653px
```
[Retirado de modularscale](http://modularscale.com)



#### Grid-width
Facilida a criação de layouts baseados em grids.

```css
$gw-column: 100px;          // Column Width
$gw-gutter: 40px;           // Gutter Width

div {
  width: grid-width(4);     // returns 520px;
  margin-left: $gw-gutter;  // returns 40px;
}
```
[Retirado de gridulator](http://gridulator.com)


#### Linear-gradient

```css
@include background-image(linear-gradient(white 0, yellow 50%, transparent 50%));
```



#### Modular-scale
Retorna a escala modular do número fornecido. Primeiro valor: Número. Segundo valor: incremento ou decremento ...-3, -2, -1, 0, 1, 2, 3... Terceiro valor: ratio.

```css
// Scaling Variables
$golden:           1.618;
$minor-second:     1.067;
$major-second:     1.125;
$minor-third:      1.2;
$major-third:      1.25;
$perfect-fourth:   1.333;
$augmented-fourth: 1.414;
$perfect-fifth:    1.5;
$minor-sixth:      1.6;
$major-sixth:      1.667;
$minor-seventh:    1.778;
$major-seventh:    1.875;
$octave:           2;
$major-tenth:      2.5;
$major-eleventh:   2.667;
$major-twelfth:    3;
$double-octave:    4;

div {
 // Increment Up GR with positive value
 font-size:        modular-scale(14px,   1, 1.618); // returns: 22.652px

 // Increment Down GR with negative value
 font-size:        modular-scale(14px,  -1, 1.618); // returns: 8.653px

 // Can be used with ceil(round up) or floor(round down)
 font-size: floor( modular-scale(14px, 1, 1.618) ); // returns: 22px
 font-size:  ceil( modular-scale(14px, 1, 1.618) ); // returns: 23px
}
```
[Retirado de modularscale](http://modularscale.com) e [Retirado de goldenrationcalculator](http://goldenrationcalculator.com)


#### Em
Converte pixel para em.

```css
font-size: em(12);
font-size: em(12, 24);
```



#### Rem
Converte pixel para rem.

```css
font-size: rem(12);
```



#### Radial-gradient

```css
@include background-image( radial-gradient(#1e5799, #3dc3d1) );
@include background-image( radial-gradient(50% 50%, circle cover, #1e5799, #3dc3d1) );
@include background-image( radial-gradient(50% 50%, circle cover, #eee 10%, #1e5799 30%, #efefef) );
```



#### Strip-units
Isola um valor, no código abaixo, ela retorna apenás o número 12.

```css
$dimension: strip-units(12px);
```



#### Tint & Shade
Tint e Shade é uma função diferente de lighten() e darken() do sass.

Tint é um mix com a cor branca.
Shade é um mix com a cor preta.

```css
background: tint(red, 40%);
background: shade(blue, 60%);
```



#### Unpack

```css
margin: unpack(1em 2em);
```

***CSS Output***
```css
margin: 1em 2em 1em 2em;
```