# Add-ons
Alguns add-ons são baseados na biblioteca do [bourbon](http://bourbon.io/).


#### Border-color

```css
@include border-color(red green null blue);
```



#### Golden-ratio

```css
@include border-style(dashed null solid);
```



#### Border-width

```css
@include border-width(1em 20px null 100%);
```



#### Button

***Simple Button Style***

```css
button {
  @include button;
}
```

***Pill Button Style***

```css
button {
  @include button(pill);
}
```

***Shiny Button Style***

```css
button {
  @include button(shiny, #ff0000);
}
```



#### Clearfix

```css
div {
  @include clearfix;
}
```



#### Directional-property

```css
@include directional-property(border, width, 10px null 4px 3px);
```



#### Ellipsis

```css
div {
  @include ellipsis(50%);
}
```



#### Font-family

```css
font-family: $helvetica;
font-family: $georgia;
font-family: $lucida-grande;
font-family: $monospace;
font-family: $verdana;
```



#### Hide-text

```css
div {
  @include hide-text;
  background-image: url(logo.png);
  height: 40px;
}
```



#### HTML5 Input Types

```css
 #{$all-text-inputs} {
  border: 1px solid green;
}

 #{$all-text-inputs-hover} { // Target the :hover pseudo-class
  background: yellow;
}

 #{$all-text-inputs-focus} { // Target the :focus pseudo-class
  background: white;
}

 #{$all-button-inputs} {
  background: green;
}

 #{$all-button-inputs-hover} { // Target the :hover pseudo-class
  background: yellow;
}

 #{$all-button-inputs-focus} { // Target the :focus pseudo-class
  background: white;
}

 #{$all-button-inputs-active} { // Target the :active pseudo-class
  background: blue;
}
```

***CSS Output***

```css
input[type="email"], input[type="number"],   input[type="password"], input[type="search"],
input[type="tel"],   input[type="text"],     input[type="url"],      input[type="color"],
input[type="date"],  input[type="datetime"], input[type="datetime-local"],
input[type="month"], input[type="time"],     input[type="week"] {
  border: 1px solid green;
}

input[type="email"]:hover, input[type="number"]:hover,   input[type="password"]:hover, input[type="search"]:hover,
input[type="tel"]:hover,   input[type="text"]:hover,     input[type="url"]:hover,      input[type="color"]:hover,
input[type="date"]:hover,  input[type="datetime"]:hover, input[type="datetime-local"]:hover,
input[type="month"]:hover, input[type="time"]:hover,     input[type="week"]:hover {
  background: yellow;
}

input[type="email"]:focus, input[type="number"]:focus,   input[type="password"]:focus, input[type="search"]:focus,
input[type="tel"]:focus,   input[type="text"]:focus,     input[type="url"]:focus,      input[type="color"]:focus,
input[type="date"]:focus,  input[type="datetime"]:focus, input[type="datetime-local"]:focus,
input[type="month"]:focus, input[type="time"]:focus,     input[type="week"]:focus {
  background: white;
}

input[type="button"],
input[type="reset"],
input[type="submit"] {
background: green;
}

input[type="button"]:hover,
input[type="reset"]:hover,
input[type="submit"]:hover {
background: yellow;
}

input[type="button"]:focus,
input[type="reset"]:focus,
input[type="submit"]:focus {
background: white;
}

input[type="button"]:active,
input[type="reset"]:active,
input[type="submit"]:active {
background: blue;
}
```



#### Margin

```css
@include margin(null 10px 3em 20vh);
```



#### Padding

```css
@include padding(20vh null 10px 3em);
```



#### Position

```css
@include position(relative, 0px null null 100px);
```



#### Prefixer

```css
@mixin box-sizing($box) {
  @include prefixer(box-sizing, $box, webkit moz spec);
}
```



#### Retina-image

```css
span {
  @include retina-image(home-icon, 32px 20px)
}
```



#### Size

```css
@include size(30px 70px); // width: 30px; height: 70px;
@include size(auto 80px); // width: auto; height: 80px;
```



#### Timing-functions

```css
@include transition(all 5s $ease-in-circ);
```



#### Triangle

```css
@include triangle(12px, gray, down);
@include triangle(12px 6px, gray lavender, up-left);
```



#### Word-wrap

```css
@include word-wrap;
@include word-wrap(normal);
```