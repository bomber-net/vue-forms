'use strict';
import mixin      from '../../mixin/mixin.js';
import props      from './js/props';
import data       from './js/data';
import computed   from './js/computed';
import watch      from './js/watch';
import methods    from './js/methods';
import components from './js/components';

export default (
	{
		mixins:[mixin],
		name:'VueFormFramedImage',
		props,
		data,
		computed,
		watch,
		methods,
		components,
	});
