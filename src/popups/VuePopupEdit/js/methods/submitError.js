'use strict';
export default function submitError (error)
	{
		this.$emit ('submitError',error);
	}
