'use strict';
import props   from './js/props';
import methods from './js/methods';

export default (
	{
		name:'AppForm',
		props,
		methods,
		mounted ()
			{
				console.log (this.$attrs);
			}
	});
