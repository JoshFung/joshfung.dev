<script lang="ts">
	interface LinkItem {
		text: string;
		clickHandler: () => void;
	}

	const handleEmailClick = () => {
		console.log('Clicked email');
		window.location.href = 'mailto:joshuagyfung@gmail.com';
	};

	const handleGithubClick = () => {
		console.log('Clicked Github');
		window.open('https://github.com/JoshFung', '_blank');
	};

	const handleResumeClick = () => {
		console.log('Clicked resume');
		const resume = '/public/Joshua Fung Resume September 2023.pdf';
		window.open(resume, '_blank');
	};

	const handleLinkedInClick = () => {
		console.log('Clicked LinkedIn');
		window.open('https://linkedin.com/in/joshfung/', '_blank');
	};

	let items: LinkItem[] = [
		{ text: 'Email', clickHandler: handleEmailClick },
		{ text: 'Github', clickHandler: handleGithubClick },
		{ text: 'Resume', clickHandler: handleResumeClick },
		{ text: 'LinkedIn', clickHandler: handleLinkedInClick }
	];
</script>

<div class="w-screen h-screen p-3 bg-rich-black">
	<div class="mb-6">
		<h1 class="text-8xl text-ivory font-stardom">Joshua</h1>
		<h1 class="text-8xl text-ivory font-stardom">Fung</h1>
	</div>

	<div class="flex flex-col">
		{#each items as item (item.text)}
			<button on:click={item.clickHandler} class="text-2xl text-isabelline font-switzer text-left">
				{item.text}
			</button>
		{/each}
	</div>
</div>

<style>
</style>
