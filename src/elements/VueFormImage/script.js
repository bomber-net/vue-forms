'use strict';
import mixin    from '../../mixin/mixin';
import props    from './js/props';
import data     from './js/data';
import computed from './js/computed';
import watch    from './js/watch';
import methods  from './js/methods';
import created  from './js/created';

export default (
	{
		mixins:[mixin],
		name:'VueFormImage',
		props,
		data,
		computed,
		watch,
		methods,
		created,
	});
