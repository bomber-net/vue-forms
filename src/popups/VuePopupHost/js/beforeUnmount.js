'use strict';
export default function beforeUnmount ()
	{
		window.removeEventListener ('keyup',this.keyView);
	}
