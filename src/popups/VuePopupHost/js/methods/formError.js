'use strict';
export default function formError (error)
	{
		this.$emit ('submitError',error);
	}
