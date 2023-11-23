'use strict';
export default function selectHint ()
	{
		return this.hint??this.placeholder;
	}
