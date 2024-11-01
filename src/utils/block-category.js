/**
 * WordPress dependencies
 */
const { getCategories, setCategories } = wp.blocks;

/**
 * Internal dependencies
 */
import icons from './icons';

setCategories( [
	// Add a themeroots block category
	{
		slug: 'themeroots',
		title: 'themeroots',
		icon: icons.logo,
	},
	...getCategories().filter( ( { slug } ) => slug !== 'themeroots' ),
] );
