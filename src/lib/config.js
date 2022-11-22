/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'JM61.dev Blog';
export const siteDescription = 'Built with the SvelteKit Static Blog Starter';
export const siteURL = 'https://jm61.dev';
export const siteLink = '';
export const siteAuthor = 'JM61.dev, initial template by Josh Collinsworth';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'About',
		route: '/about'
	},
	{
		title: 'Contact',
		route: '/contact'
	},
	{
		title: 'Projects',
		route: '/projects'
	},
	{
		title: 'Golang',
		route: '/golang'
	}
];
