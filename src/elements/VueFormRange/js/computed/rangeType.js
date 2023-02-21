'use strict';
export default function rangeType ()
	{
		let type=this.type ?? 'text';
		switch (type.toLowerCase ())
			{
				case 'time':
					return 'time';
				case 'date':
					return 'date';
				case 'datetime':
				case 'datetime-local':
					return 'datetime-local';
				default:
					return 'text';
			}
	}
