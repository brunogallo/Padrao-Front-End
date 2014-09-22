# Funções
Algumas funções são baseadas na biblioteca do [bourbon](http://bourbon.io/).


#### Flex-grid
Essa função cria um grid flexível.

```css
// As variáveis devem ser definidas no seu arquivo principal scss.
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
//Resources: modularscale.com



#### Animation-direction

```css
@include animation-direction(alternate-reverse);
```



#### Animation-duration

```css
@include animation-duration(2s);
```



#### Animation-fill-mode

```css
@include animation-fill-mode(backwards);
```



#### Animation-iteration-count

```css
@include animation-iteration-count(infinite);
```



#### Animation-name

```css
@include animation-name(scale, slide);
```



#### Animation-play-state

```css
@include animation-play-state(paused);
```



#### Animation-timing-function

```css
@include animation-timing-function(ease);
```



#### Appearance

```css
@include appearance(none);
```



#### Backface-visibility

```css
@include backface-visibility(visible);
```



#### Background

```css
@include background(linear-gradient(red, green) left repeat);
@include background(linear-gradient(red, green) left repeat, radial-gradient(red, orange) left repeat);
@include background(url("/images/a.png"), linear-gradient(red, green), center no-repeat orange scroll);
```



#### Background-image

```css
// Imagem com um layer em gradiente.
@include background-image(url("/images/a.png"), linear-gradient(white 0, yellow 50%, transparent 50%));

// Multiplos linear-gradients
@include background-image(linear-gradient(hsla(0, 100%, 100%, 0.25) 0%, hsla(0, 100%, 100%, 0.08) 50%, transparent 50%),
                           linear-gradient(#4e7ba3, darken(#4e7ba4, 10%)));

// Não suportado
@include background-image(url("/images/a.png") center no-repeat, url("images/b.png") left repeat);

//Utilize dessa forma, ao invés do exemplo acima.
@include background-image(url("/images/a.png"), url("images/b.png"));
background-position: center top, center;
background-repeat: no-repeat, repeat-x;
```



#### Border-image

```css
@include border-image(url(/images/border.png) 27 repeat);
```



#### Border-radius

```css
@include border-radius(5px);
@include border-top-radius(5px);
@include border-bottom-radius(5px);
@include border-left-radius(5px);
@include border-right-radius(5px);
```



#### Box-sizing

```css
@include box-sizing(border-box);
```



#### Calc

```css
@include calc(width, '100% - 80px');
Atenção: Para passar o valor de uma variável, você precisa usar interpolação.—#{ }.
$width: 100%;

@include calc(width, '#{$width} - 80px');
```



#### Columns

```css
@include columns(12 8em);
@include column-rule(1px solid green);
```



#### Filter

```css
@include filter(grayscale(50%));
```



#### Flexbox

```css
div.parent {
  @include display(flex);
  @include align-items(stretch);
  @include flex-direction(row);
  @include justify-content(flex-start);
}

div.parent > div.child {
  @include flex(1);
}
```



#### Font-face

```css
@include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-Regular');
@include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-Bold', bold);
@include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-Italic', normal, italic);

// Rails asset-pipeline - place fonts in app/assets/fonts/
@include font-face(SourceSansPro, 'Source_Sans_Pro/SourceSansPro-Regular', normal, $asset-pipeline: true);
```



#### Font-feature-settings

```css
@include font-feature-settings("liga");
@include font-feature-settings("pnum", "kern" false);
```



#### HiDPI Media Query

```css
@include hidpi(1.5) {
  width: 260px;
}
```

***CSS Output***

```css
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 1.5/1),
only screen and (min-resolution: 144dpi),
only screen and (min-resolution: 1.5dppx) {
  width: 260px;
}
```



#### Hyphens

```css
@include hyphens(manual);
```



#### Image-rendering

```css
@include image-rendering(optimizeSpeed);
```



#### Keyframes

```css
@include keyframes(fadeIn) {
  from {
    @include transform(scale(0));
  }
  to {
    @include transform(scale(1));
  }
}
```



#### Linear-gradient

```css
@include linear-gradient(#1e5799, #2989d8);
@include linear-gradient(to top, #8fdce5, #3dc3d1);
@include linear-gradient(to top, #8fdce5, #3dc3d1, $fallback: red);
@include linear-gradient(50deg, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);
```



#### Perspective

```css
@include perspective(300px);
@include perspective-origin(30% 30%);
```



#### Placeholder

```css
input {
  width: 300px;

  @include placeholder {
    color: red;
  }
}
```



#### Radial-gradient

```css
@include radial-gradient(#1e5799, #3dc3d1);
@include radial-gradient(#1e5799, #3dc3d1, $fallback: red);
@include radial-gradient(circle at 50% 50%, #eee 10%, #1e5799 30%, #efefef);
```



#### Transform

```css
@include transform(translateY(50px));
@include transform-origin(center top);
@include transform-style(preserve-3d);
```



#### Transition

```css
@include transition (all 2.0s ease-in-out);
@include transition (opacity 1.0s ease-in 0s, width 2.0s ease-in 2s);
@include transition-property (transform);
@include transition-duration(1.0s);
@include transition-timing-function(ease-in);
@include transition-delay(0.5s);
```



#### User-select

```css
@include user-select(none);
```