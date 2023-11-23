'use strict';
import mixin    from '../../mixin/mixin';
import props    from './js/props';
import computed from './js/computed';
import methods  from './js/methods';

export default (
	{
		mixins:[mixin],
		name:'VueFormInput',
		props,
		computed,
		methods,
	});
