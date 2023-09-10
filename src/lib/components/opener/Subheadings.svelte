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
		const JoshFungResume = '/JoshFungResume.pdf';
		window.open(JoshFungResume, '_blank');
	};

	const handleLinkedInClick = () => {
		console.log('Clicked LinkedIn');
		window.open('https://linkedin.com/in/joshfung/', '_blank');
	};

	const items: LinkItem[] = [
		{ text: 'Email', clickHandler: handleEmailClick },
		{ text: 'Github', clickHandler: handleGithubClick },
		{ text: 'Resume', clickHandler: handleResumeClick },
		{ text: 'LinkedIn', clickHandler: handleLinkedInClick }
	];
</script>

<div class="grid flex-1 grid-cols-4 align-center">
	{#each items as item, i (item.text)}
		<button
			on:click={item.clickHandler}
			class={`text-isabelline font-switzer font-regular justify-self-end sm:justify-self-center text-base sm:text-3xl `}
		>
			{item.text}
		</button>
	{/each}
</div>

<style>
	button {
		width: fit-content;
	}

	button:nth-child(1) {
		grid-row: 1;
		grid-column: 1;
	}

	button:nth-child(2) {
		grid-row: 2;
		grid-column: 2;
	}

	button:nth-child(3) {
		grid-row: 3;
		grid-column: 3;
	}

	button:nth-child(4) {
		grid-row: 4;
		grid-column: 4;
	}
</style>
