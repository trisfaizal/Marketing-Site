---
layout: post
title: Quote test
header: Quote test
category: Deconstructions
author: george
quotes:
  nick:
    text: Hello there
    name: Nick Meek
    image_path: /img/george.jpg
  meek:
    text: Why, hello there
    name: Meek Nick
    image_path: /img/sam.jpg 
---

{% include /quote.html quote=page.quotes.nick%}

{% include /quote.html quote=page.quotes.meek%}
