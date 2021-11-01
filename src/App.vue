<template>
	<div>
		<nav-bar />
		<transition name="slide" mode="out-in">
			<router-view :key="$route.fullPath" />
		</transition>
	</div>
</template>

<script>

import NavBar from '@/components/NavBar'

export default {
	name: 'App',
	components: {
		NavBar
	}
}
</script>

<style>

	/* ~~ START OF CSS RESET ~~ */

	Box sizing rules *,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	p,
	figure,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
	ul[role='list'],
	ol[role='list'] {
		list-style: none;
	}

	/* Set core root defaults */
	html:focus-within {
		scroll-behavior: smooth;
	}

	/* Set core body defaults */
	body {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	/* Make images easier to work with */
	img,
	picture {
		max-width: 100%;
		display: block;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		html:focus-within {
			scroll-behavior: auto;
		}

		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	/* ~~ END OF CSS RESET ~~ */

	/* ~~ VUE TRANSITIONS STYLING ~~ */

    .slide-enter-active{
		-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    }
    .slide-leave-active {
        -webkit-animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

	@-webkit-keyframes slide-in-left {
		0% {
			-webkit-transform: translateX(-1000px);
					transform: translateX(-1000px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
					transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes slide-in-left {
		0% {
			-webkit-transform: translateX(-1000px);
					transform: translateX(-1000px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0);
					transform: translateX(0);
			opacity: 1;
		}
	}
	@-webkit-keyframes slide-out-right {
		0% {
			-webkit-transform: translateX(0);
					transform: translateX(0);
			opacity: 1;
		}
		100% {
			-webkit-transform: translateX(1000px);
					transform: translateX(1000px);
			opacity: 0;
		}
	}
	@keyframes slide-out-right {
		0% {
			-webkit-transform: translateX(0);
					transform: translateX(0);
			opacity: 1;
		}
		100% {
			-webkit-transform: translateX(1000px);
					transform: translateX(1000px);
			opacity: 0;
		}
	}

	/* NORMAL STYLING */

	body{
		background-color: #f0f0f0 !important;
	}

</style>
