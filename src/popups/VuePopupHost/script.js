'use strict';
import mixin         from '../../mixin/mixin';
import props         from './js/props';
import emits         from './js/emits';
import data          from './js/data';
import computed      from './js/computed';
import methods       from './js/methods';
import components    from './js/components';
import created       from './js/created';
import beforeUnmount from './js/beforeUnmount';

export default (
	{
		mixins:[mixin],
		name:'VuePopupHost',
		props,
		emits,
		data,
		computed,
		methods,
		components,
		created,
		beforeUnmount,
	});
