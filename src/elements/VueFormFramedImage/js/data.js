'use strict';
import {isString} from 'lodash/lang.js';

export default function data ()
	{
		let src=this.modelValue;
		return (
			{
				src:isString (src)?src:null,
				viewPopup:false,
				popup:
					{
						srcImg:null,
						imgDataURL:null,
						dragOn:false,
						top:0,
						left:0,
						scale:1,
					}
			});
	}
