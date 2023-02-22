'use strict';
export default function formBind ()
	{
		let action=this.dst;
		let method=this.method;
		let data=this.formData;
		return {action,method,data};
	}
