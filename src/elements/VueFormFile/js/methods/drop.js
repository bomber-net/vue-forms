'use strict';
export default function drop (event)
	{
		let files;
		switch (event.type)
			{
				case 'change':
					files=event.target.files;
					break;
				case 'drop':
					files=event.dataTransfer.files;
					break;
			}
		this.$emit ('select',files);
	}
