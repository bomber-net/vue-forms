'use strict';
import {isObjectLike,isString} from 'lodash/lang';
import {values}                from 'lodash/object.js';

export default function imageAccept ()
	{
		let accept=this.accept;
		switch (true)
			{
				case isString (accept):
					accept=accept.split (',');
					break;
				case Array.isArray (accept):
					break;
				case isObjectLike (accept):
					accept=values (accept);
					break;
				default:
					accept=[];
			}
		return accept.map (type=>
			{
				return /^(image\/|\.)?(jpeg|jpg|png|gif|svg\+xml|webp)$/i.test (type)?'image/'+type.toLowerCase ().replace (/^(image\/|\.)/i,'').replace ('jpg','jpeg'):null;
			}).filter (type=>type).join (',');
	}
