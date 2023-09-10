<script lang="ts">
	const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

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
		const filePath = '/JoshFungResume.pdf'; // Only works for hosted online, for local use: public/Joshua Fung Resume ... .pdf
		window.open(filePath, '_blank');
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

<div
	class="flex flex-col flex-1 justify-evenly items-start px-4 xs:px-6 sm:px-8 pt-4 xs:pt-6 sm:pt-8"
>
	{#each items as item (item.text)}
		<button
			on:click={item.clickHandler}
			class="text-isabelline font-switzer font-medium text-lg xs:text-2xl sm:text-3xl"
		>
			{item.text}
		</button>
	{/each}
</div>

<style>
</style>
