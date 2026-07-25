<script lang="ts">
	import NavItem from '$lib/components/nav_item.svelte';
	import NavGroup from '$lib/components/nav_group.svelte';
  // import Link from '$lib/components/link.svelte';
	import Icon from '@iconify/svelte';

	function handleClick(event: MouseEvent) {
    const a = event.target.closest('a');
    const isReplace = a.hasAttribute('data-sveltekit-replacestate');
    const href = a.href;

		if (
			!href ||
			!window.HotwireNavigator.enabled ||
			!window.HotwireNavigator.canNavigate(new URL(href, window.location.origin))
		) {
			return;
		}

		event.preventDefault();
    
    const action = isReplace ? 'replace' : 'advance';
		window.HotwireNavigator.visitProposedToLocation(new URL(href, window.location.origin), {
			action: action
		});
	}

</script>

<svelte:head>
	<title>Welcome to SvelteKit</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>This demo app will help you get acquainted with the framework.</p>
<h3>Basic features</h3>
<NavGroup>
	<NavItem
		href="/one"
		icon="material-symbols:directions-outline"
		label="Navigate to another page"
	/>
	<NavItem href="/slow" icon="fluent:slow-mode-24-regular" label="Open a slow-loading page" />
	<NavItem href="/long" icon="hugeicons:scroll" label="Try scroll restoration" />
</NavGroup>
<h3>Advanced features</h3>
<NavGroup>
	<!-- <NavItem href="/new" icon="material-symbols:open-in-new" label="Load a page modally" /> -->
  <!-- <Link class="flex items-center gap-3 bg-white p-4 md:flex-col md:rounded-lg" href="/new"> -->
  <!--   <Icon icon="material-symbols:open-in-new" class="size-6 text-blue-400 md:size-10" /> -->
  <!--   <div class="flex-1">Load a page modally (original)</div> -->
  <!-- </Link> -->

  <a data-sveltekit-replacestate href="/new" class="flex items-center gap-3 bg-white p-4 md:flex-col md:rounded-lg" onclick={handleClick}>
    <Icon icon="material-symbols:open-in-new" class="size-6 text-blue-400 md:size-10" />
    <div class="flex-1">Load a page modally</div>
  </a>

	<NavItem href="/numbers" icon="bi:phone" label="Intercept with a native view" />
	<NavItem
		href="https://svelte.dev/"
		icon="material-symbols:link"
		label="Follow an external link"
	/>
	<NavItem href="/files" icon="material-symbols:folder-outline" label="See how files work" />
	<NavItem href="/follow" icon="material-symbols:arrow-forward" label="Follow a redirect" />
</NavGroup>
<h3>Bridge components</h3>
<NavGroup>
	<NavItem href="/bridge-form" icon="mdi:form-outline" label="Form example" />
	<NavItem
		href="/bridge-overflow"
		icon="carbon:overflow-menu-vertical"
		label="Overflow menu example"
	/>
</NavGroup>
