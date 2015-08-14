# Meta Tags
**Algumas meta tags abaixo não serão validadas no w3c.**  
**Meta tags válidas:** [https://wiki.whatwg.org/wiki/MetaExtensions#Registered_Extensions](https://wiki.whatwg.org/wiki/MetaExtensions#Registered_Extensions)

### Meta tags básicas HTML

```
<meta name="keywords" content=""/>
<meta name="description" content=""/>
<meta name="subject" content="">
<meta name="copyright"content="">
<meta name="language" content="pt-BR">
<meta name="robots" content="index,follow" />
<meta name="author" content="">
<meta name="designer" content="">
<meta name="url" content="http://www.websiteaddrress.com">
<meta name="identifier-URL" content="http://www.websiteaddress.com">
<meta http-equiv="Cache-Control" content="no-cache">
```


#### OpenGraph Meta Tags

```
<meta name="og:title" content="The Rock"/>
<meta name="og:type" content="movie"/>
<meta name="og:url" content="http://www.imdb.com/title/tt0117500/"/>
<meta name="og:image" content="http://ia.media-imdb.com/rock.jpg"/>
<meta name="og:site_name" content="IMDb"/>
<meta name="og:description" content="A group of U.S. Marines, under command of..."/>

<meta name="fb:page_id" content="43929265776" />

<meta name="og:email" content="me@example.com"/>
<meta name="og:phone_number" content="650-123-4567"/>
<meta name="og:fax_number" content="+1-415-123-4567"/>

<meta name="og:latitude" content="37.416343"/>
<meta name="og:longitude" content="-122.153013"/>
<meta name="og:street-address" content="1601 S California Ave"/>
<meta name="og:locality" content="Palo Alto"/>
<meta name="og:region" content="CA"/>
<meta name="og:postal-code" content="94304"/>
<meta name="og:country-name" content="USA"/>

<meta property="og:type" content="game.achievement"/>
<meta property="og:points" content="POINTS_FOR_ACHIEVEMENT"/>

<meta property="og:video" content="http://example.com/awesome.swf" />
<meta property="og:video:height" content="640" />
<meta property="og:video:width" content="385" />
<meta property="og:video:type" content="application/x-shockwave-flash" />
<meta property="og:video" content="http://example.com/html5.mp4" />
<meta property="og:video:type" content="video/mp4" />
<meta property="og:video" content="http://example.com/fallback.vid" />
<meta property="og:video:type" content="text/html" />

<meta property="og:audio" content="http://example.com/amazing.mp3" />
<meta property="og:audio:title" content="Amazing Song" />
<meta property="og:audio:artist" content="Amazing Band" />
<meta property="og:audio:album" content="Amazing Album" />
<meta property="og:audio:type" content="application/mp3" />

```


#### TWITTER CARD

```
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@brunogallo">
<meta name="twitter:title" content="Projeto Padrão Front End">
<meta name="twitter:description" content="Validar, compilar, minificar, otimizar imagens e enviar tudo isso para o ambiente de produção são tarefas repetitivas. Vamos automatizar tudo? você fica só com a parte legal de desenvolver.">
<meta name="twitter:creator" content="@brunogallo">
<meta name="twitter:image" content="assets/img/twitter-card.jpg">

```


#### GOOGLE PLUS

```
<link rel="author" href="https://plus.google.com/107095513368347832500/posts"/>
<link rel="publisher" href="https://plus.google.com/107095513368347832500"/>
<meta itemprop="name" content="Projeto Padrão Front End">
<meta itemprop="description" content="Validar, compilar, minificar, otimizar imagens e enviar tudo isso para o ambiente de produção são tarefas repetitivas. Utilizando o Grunt para automatizar toda essa parte chata, você fica só com a parte legal de desenvolver.">
<meta itemprop="image" content="assets/img/og.jpg">

```


#### PALM E BLACKBERRY

```
<meta name="HandheldFriendly" content="True">

```

#### CLAIMID

```
<meta name="microid" content="mailto+http:sha1:e6058ed7fca4a1921cq91d7f1f3b8736cd3cc1g7" />

```


#### INTERNET EXPLORER META TAGS

```
<meta http-equiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
<meta http-equiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
<meta name="mssmarttagspreventparsing" content="true">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="msapplication-starturl" content="http://blog.reybango.com/about/"/>
<meta name="msapplication-window" content="width=800;height=600"/>
<meta name="msapplication-navbutton-color" content="red"/>
<meta name="application-name" content="Rey Bango Front-end Developer"/>
<meta name="msapplication-tooltip" content="Launch Rey Bango's Blog"/>
<meta name="msapplication-task" content="name=About;action-uri=/about/;icon-uri=/images/about.ico" />
<meta name="msapplication-task" content="name=The Big List;action-uri=/the-big-list-of-javascript-css-and-html-development-tools-libraries-projects-and-books/;icon-uri=/images/list_links.ico" />
<meta name="msapplication-task" content="name=jQuery Posts;action-uri=/category/jquery/;icon-uri=/images/jquery.ico" />
<meta name="msapplication-task" content="name=Start Developing;action-uri=/category/javascript/;icon-uri=/images/script.ico" />
<link rel="shortcut icon" href="/images/favicon.ico" />
<meta http-equiv="cleartype" content="on">

```

#### TWEETMEME META TAGS

```
<meta name="tweetmeme-title" content="Retweet Button Explained" />

```

#### BLOG CATALOG META TAGS

```
<meta name="blogcatalog" />

```

#### RAILS META TAGS

```
<meta name="csrf-param" content="authenticity_token"/>
<meta name="csrf-token" content="/bZVwvomkAnwAI1Qd37lFeewvpOIiackk9121fFwWwc="/>

```

#### APPLE TAGS

```
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-touch-fullscreen" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="">
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png">
<link rel="apple-touch-startup-image" href="/apple-startup.png">
<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
<link rel="icon" sizes="192x192" href="/chrome-touch-icon-192x192.png">


```

#### HTML Link Tags

```
<link rel="alternate" type="application/rss+xml" title="RSS" href="http://feeds.feedburner.com/martini" />
<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
<link rel="fluid-icon" type="image/png" href="/fluid-icon.png" />
<link rel="me" type="text/html" href="http://google.com/profiles/thenextweb"/>
<link rel='shortlink' href='http://blog.unto.net/?p=353' />
<link rel='archives' title='May 2003' href='http://blog.unto.net/2003/05/' />
<link rel='index' title='DeWitt Clinton' href='http://blog.unto.net/' />
<link rel='start' title='Pattern Recognition 1' href='http://blog.unto.net/photos/pattern_recognition_1_about/' />
<link rel='prev' title='OpenSearch and OpenID? A sure way to get my attention.' href='http://blog.unto.net/opensearch/opensearch-and-openid-a-sure-way-to-get-my-attention/' />
<link rel='next' title='Not blog' href='http://blog.unto.net/meta/not-blog/' />
<link rel="search" href="/search.xml" type="application/opensearchdescription+xml" title="Viatropos" />

<link rel="self" type="application/atom+xml" href="http://www.syfyportal.com/atomFeed.php?page=3"/>
<link rel="first" href="http://www.syfyportal.com/atomFeed.php"/>
<link rel="next" href="http://www.syfyportal.com/atomFeed.php?page=4"/>
<link rel="previous" href="http://www.syfyportal.com/atomFeed.php?page=2"/>
<link rel="last" href="http://www.syfyportal.com/atomFeed.php?page=147"/>

<link rel='shortlink' href='http://smallbiztrends.com/?p=43625' />
<link rel="canonical" href="http://smallbiztrends.com/2010/06/9-things-to-do-before-entering-social-media.html" />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://smallbiztrends.com/xmlrpc.php?rsd" />
<link rel="pingback" href="http://smallbiztrends.com/xmlrpc.php" />
<link media="only screen and (max-device-width: 480px)" href="http://wordpress.org/style/iphone.css" type="text/css" rel="stylesheet" />

```

#### BLOG CATALOG META TAGS

```
<meta name="blogcatalog" />

```