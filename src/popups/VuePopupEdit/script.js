'use strict';
import mixin      from '../../mixin/mixin';
import emits      from './js/emits';
import data       from './js/data';
import methods    from './js/methods';
import components from './js/components';

export default (
	{
		mixins:[mixin],
		name:'VuePopupEdit',
		emits,
		data,
		methods,
		components,
	});
