<script>
	export let posts = []
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<img
					src={post.coverImage}
					alt=""
					width={post.coverWidth}
					height={post.coverHeight}
					style="width: {post.coverWidth};border-radius: 10px;"
					/>
					<h2>
						{post.title}
					</h2>
				</a>
			</article>

			<p>{post.excerpt}</p>
		</li>
	{/each}
</ul>