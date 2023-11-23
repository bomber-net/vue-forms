'use strict';
export default (
	{
		deep:true,
		handler (value)
			{
				value??=[];
				this.checked=value.map (i=>i);
				this.checked.sort ((a,b)=>a-b);
			}
	});
