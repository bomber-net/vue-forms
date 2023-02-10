'use strict';
export default function inputType ()
	{
		switch (this.type)
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
				default:
					return 'text';
			}
	}
