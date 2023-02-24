'use strict';
import close         from './methods/close';
import loadStart     from './methods/loadStart';
import loadSuccess   from './methods/loadSuccess';
import loadError     from './methods/loadError';
import loadEnd       from './methods/loadEnd';
import submitStart   from './methods/submitStart';
import submitSuccess from './methods/submitSuccess';
import submitError   from './methods/submitError';
import submitEnd     from './methods/submitEnd';

export default (
	{
		close,
		loadStart,
		loadSuccess,
		loadError,
		loadEnd,
		submitStart,
		submitSuccess,
		submitError,
		submitEnd,
	});
