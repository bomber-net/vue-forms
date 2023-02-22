'use strict';
export default function data ()
	{
		return (
			{
				formData:
					{
						email:null,
						password:null,
						remember:this.remember,
					},
				errors:{},
				formEvents:
					{
						start:this.start,
						success:this.success,
						error:this.error,
						end:this.end,
						reset:this.reset,
					},
			});
	}
