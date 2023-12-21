<script lang="ts">
	import { Title, Subheadings } from './index';
</script>

<div class="w-full h-full flex flex-col justify-between pt-2 px-2 xs:px-3 sm:px-8">
	<Title />
	<Subheadings />
</div>

<style>
	div {
		background: rgb(82, 15, 0);
		background: linear-gradient(
				13deg,
				rgba(55, 3, 1, 0.975) 0%,
				rgba(8, 23, 38, 0.975) 14%,
				rgba(8, 23, 38, 0.975) 66%,
				rgba(55, 3, 1, 0.975) 100%
			),
			url("data:image/svg+xml,%3Csvg viewBox='0 0 10000 10000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.0085' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
	}
</style>
