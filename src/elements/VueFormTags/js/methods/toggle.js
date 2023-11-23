'use strict';
import {remove} from 'lodash/array.js';

export default function toggle (id)
	{
		let model=this.checked;
		if (model.includes (id)) remove (model,i=>i===id);
			else model.push (id);
		model.sort ((a,b)=>a-b);
	}
