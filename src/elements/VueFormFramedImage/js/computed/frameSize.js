'use strict';
import {isNumber,isObjectLike,isString} from 'lodash/lang';
import {values}                         from 'lodash/object.js';

export default function frameSize ()
	{
		let size=this.size;
		switch (true)
			{
				case isString (size):
					size=size.match (/(\d+)(?:x(\d+))?/i)??[];
					size=[parseInt (size[1]??100),parseInt (size[2]??size[1]??100)];
					break;
				case isNumber (size):
					size=[size,size];
					break;
				case Array.isArray (size):
					break;
				case isObjectLike (size):
					size=values (size);
					size=[size[0]??100,size[1]??size[0]??100];
					break;
				default:
					size=[100,100];
			}
		let width=size[0];
		let height=size[1] ?? width;
		return {width,height};
	}
