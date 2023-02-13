'use strict';
export default function error ({status,statusText,data})
	{
		switch (status)
			{
				case 422:
					this.errors=data.errors?data.errors:data;
					break;
				default:
					this.errors.email=statusText;
			}
	}
