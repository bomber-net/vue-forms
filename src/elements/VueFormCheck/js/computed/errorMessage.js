'use strict';
export default function errorMessage ()
	{
		let message=this.error ?? this.e;
		if (Array.isArray (message)) return message[0];
		return message;
	}
