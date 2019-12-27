﻿---
layout: default
---
<section class="home">
	<h2 class="page-title">
		{{ page.title }}
	</h2>
	<ul class="post-list">
		{% for post in paginator.posts %}
		<li class="post-list-item">
			<header>
				<h3 >
					<a href="/blog{{ /post.url }}"> {{ post.title }}</a>
				</h3>
				<time datetime="{{ post.date | date_to_xmlschema}}">{{post.date | date: "%d-%m-%Y"}}</time>
				<ul class="cat">
					{% for category in post.categories %}
					<li>
						<a href="/blog/categories/{{ category }}.html">
							{{ category }}
						</a>
					</li>

					{% endfor %}
				</ul>

			</header>
			<div class="post-list-item-desc">
				<p>{{ post.excerpt | default: '' | strip_html | normalize_whitespace | truncate: 200 | escape }}
				<a href="/blog{{ /post.url }}"> Czytaj więcej</a>
				</p>
			</div>
		</li>
		{% endfor %}
	</ul>
	<div class="pagination">
		{% if paginator.previous_page %}
		<a href="{{ paginator.previous_page_path }}" class="previous">Poprzednia Strona</a>
		{% endif %}
		<span class="page_number ">Strona: {{ paginator.page }} / {{ paginator.total_pages }}</span>
		{% if paginator.next_page %}
		<a href="{{ paginator.next_page_path }}" class="next">Następna Strona</a>
		{% endif %}
	</div>
	<a href="{{"/feeds/feed.xml " | relative_url }}" style="line-height:2em">
<svg width="1.5em" style="vertical-align: middle; margin-bottom: 5px;" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title></title><circle cx="21" cy="43" r="5"></circle><path d="M35,48.5A2.5,2.5,0,0,1,32.5,46,13.515,13.515,0,0,0,19,32.5a2.5,2.5,0,0,1,0-5A18.521,18.521,0,0,1,37.5,46,2.5,2.5,0,0,1,35,48.5Z"></path><path d="M45,48.5A2.5,2.5,0,0,1,42.5,46,23.527,23.527,0,0,0,19,22.5a2.5,2.5,0,0,1,0-5A28.532,28.532,0,0,1,47.5,46,2.5,2.5,0,0,1,45,48.5Z"></path></svg>
		Subskrybuj posty
	</a>
</section>