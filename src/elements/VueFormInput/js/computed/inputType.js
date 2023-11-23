'use strict';
export default function inputType ()
	{
		switch (this.type?.toLowerCase ())
			{
				case 'area':
				case 'textarea':
					return 'textarea';
				case 'password':
					return 'password';
				case 'email':
					return 'email';
				case 'phone':
				case 'tel':
					return 'tel';
				case 'datetime':
				case 'datetime-local':
					return 'datetime-local';
				case 'date':
					return 'date';
				case 'time':
					return 'time';
				case 'url':
					return 'url';
				default:
					return 'text';
			}
	}
