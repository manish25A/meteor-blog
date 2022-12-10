<template>
	<h1>dashboard</h1>
</template>

<style>
body {
	padding: 1rem;
}
</style>

<script>
import BootstrapSidebar from 'vue-bootstrap-sidebar';
export default {
	components: {
		BootstrapSidebar,
	},
	data() {
		return {
			initialShow: true,
			header: '<h3>Sidebar</h3>',
			links: [
				{ name: 'Home', href: { name: 'home' }, faIcon: ['fas', 'home'] },
				{
					name: 'Dropdown',
					faIcon: ['fas', 'tint'],
					children: [
						{
							name: 'Child Item 1',
							href: {
								name: 'child-item-1',
							},
							faIcon: ['fas', 'child'],
						},
						{
							name: 'Child Item 2',
							href: {
								name: 'child-item-2',
							},
							faIcon: ['fas', 'child'],
						},
					],
				},
				{ name: 'About', href: { name: 'about' }, faIcon: 'users' },
				{ name: 'Contact', href: { name: 'contact' }, faIcon: 'phone' },
			],
		};
	},
	methods: {
		onSidebarChanged() {},
	},
};
</script>
