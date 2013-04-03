---
layout: page
comments: false
title: 产品展示
sharing: false
footer: true
---

{% assign index = true %}
<tr>
{% for post in site.posts %}
<td>
<a href="{{ post.url }}"><font size="3px"> {{ post.title }} </font></br>
<a href="{{ post.url }}"><img src="/images/products/{{ post.slug }}_350.jpg"/></a>
</td> 
{% endfor %} 
</tr>

