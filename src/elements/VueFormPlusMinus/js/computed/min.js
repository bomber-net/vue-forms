'use strict';
import {isInteger,isString} from 'lodash/lang';

export default function min ()
	{
		let min=this.clamp?.min;
		if (isString (min)) min=parseInt (value.replace (/[\d\-]+/,''));
		return isInteger (min)?min:Number.MIN_SAFE_INTEGER;
	}
