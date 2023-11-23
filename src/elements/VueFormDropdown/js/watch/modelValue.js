'use strict';
export default (
	{
		deep:true,
		handler (value)
			{
				if (value===null) this.search='';
			}
	});
