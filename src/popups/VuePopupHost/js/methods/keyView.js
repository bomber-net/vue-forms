'use strict';
export default function keyView (event)
	{
		if (this.esc && event.code==='Escape') this.formReset ();
	}
