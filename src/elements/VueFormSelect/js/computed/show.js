'use strict';
export default function show ()
	{
		let count=Object.keys (this.options).length;
		return count>1 || (count && this.showOne);
	}
