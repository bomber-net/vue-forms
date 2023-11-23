'use strict';
import mixin   from '../../mixin/mixin';
import props   from './js/props';
import emits   from './js/emits';
import methods from './js/methods';

export default (
	{
		mixins:[mixin],
		name:'AppForm',
		props,
		emits,
		methods,
	});
