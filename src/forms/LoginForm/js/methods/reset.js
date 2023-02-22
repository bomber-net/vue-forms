'use strict';
export default function reset ()
	{
		this.formData=
			{
				email:null,
				password:null,
				remember:this.remember,
			};
	}
