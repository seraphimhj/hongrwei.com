---
layout: page
comments: false
title: 产品中心
sharing: false
footer: true
---
{% assign index = true %}

<div class="alert alert-info">
    点击产品名字查看图片及详情链接
</div>

<div class="accordion" id="product-collapse">
{% for post in site.posts %}
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#product-collapse" href="#collapse{{ forloop.index0 }}">
        {{ post.title }} 
      </a>
    </div>
    <div id="collapse{{ forloop.index0 }}" class="accordion-body collapse in" style="margin:10px 0px;">
      <div class="accordion-inner">
        <img src="/images/products/{{ post.slug }}_350.jpg"/>
        <br>
        <a href="{{ post.url }}" class="btn btn-primary">查阅详情</a>
        <a href="#collapse{{ forloop.index }}" class="btn">下一个产品</a>
      </div>
    </div>
  </div>
{% endfor %} 
</div>

