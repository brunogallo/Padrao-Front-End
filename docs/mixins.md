# Mixins


### Animation

```css
box:hover {
  // Animation shorthand works the same as the CSS3 animation shorthand
  @include animation(scale 1.0s ease-in, slide 2.0s ease);

  // The above outputs the same CSS as using independent, granular mixins.
  @include animation-name(scale, slide);
  @include animation-duration(2s);
  @include animation-timing-function(ease);
  @include animation-iteration-count(infinite);
}
```