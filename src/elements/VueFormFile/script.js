'use strict';
import mixin    from '../../mixin/mixin.js';
import props    from './js/props';
import computed from './js/computed';
import methods  from './js/methods';

export default (
	{
		mixins:[mixin],
		name:'VueFormFile',
		props,
		computed,
		methods,
	});
