'use strict';
export default function isSelected (index)
	{
		if (Array.isArray (this.options)) index=parseInt (index);
		return this.selected.includes (index);
	}
