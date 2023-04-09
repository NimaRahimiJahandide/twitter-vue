<script >
export default{
	props: ['tweet']
}

</script>
<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<article class="tweet border-b border-gray-600">
		<router-link to="#">
			<figure  class="w-16 mr-3">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
			</figure>
			<section class="flex-1">
				<div>
					<span class="text-white font-bold">
						{{ tweet.author.display_name }}
					</span>
					<span class="text-gray-500 ml-2 font-normal">
						{{ tweet.author.username }}
					</span>
				</div>

				<div :class="(tweet.image ? 'mb-3' : '')">
					<p class="text-white" v-html="tweet.body"></p>
				</div>

				<figure v-if="tweet.image" class="rounded-xl border border-gray-600 overflow-hidden">
					<img 
						:src="tweet.image.url" 
						:alt="tweet.image.alt" 
						class="w-full h-44 object-cover" />
				</figure>

				<div class="mt-2 flex items-center justify-between">
					<div class="text-gray-500">
						<i class="fa fa-comment p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
						<span>{{ tweet.stats.comments.length }}</span>
					</div>
					<div class="text-gray-500">
						<i class="fa fa-retweet p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
						<span>{{ tweet.stats.retweets.length }}</span>
					</div>
					<div class="text-gray-500">
						<i class="fa fa-heart p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
						<span>{{ tweet.stats.likes.length }}</span>
					</div>
					<div class="text-gray-500">
						<i class="fa fa-share p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
					</div>
				</div>
			</section>
		</router-link>

	</article>
</template>

