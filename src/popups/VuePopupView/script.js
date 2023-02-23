'use strict';
import emits      from './js/emits';
import data       from './js/data';
import methods    from './js/methods';
import components from './js/components';
import mixin      from '../../mixin/mixin.js';

export default (
	{
		mixins:[mixin],
		name:'VuePopupView',
		emits,
		data,
		methods,
		components
	});
