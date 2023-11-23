'use strict';
export default function toggleSelect ()
	{
		let select=this.$refs.select;
		if (select) select.style.display=select.style.display?'':'none';
	}
