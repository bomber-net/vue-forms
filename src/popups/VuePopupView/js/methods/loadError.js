'use strict';
export default function loadError (error)
	{
		this.errorMessage=error.data.message??error.data;
	}
