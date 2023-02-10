'use strict';
import mixin    from '../../mixin/mixin';
import props    from './js/props';
import computed from './js/computed';
import methods  from './js/methods';

export default (
	{
		name:'VueFormInput',
		mixins:[mixin],
		props,
		computed,
		methods,
	});
