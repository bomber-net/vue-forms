'use strict';
import {isInteger,isString} from 'lodash/lang';

export default function max ()
	{
		let max=this.clamp?.max;
		if (isString (max)) max=parseInt (value.replace (/[\d\-]+/,''));
		return isInteger (max)?max:Number.MAX_SAFE_INTEGER;
	}
