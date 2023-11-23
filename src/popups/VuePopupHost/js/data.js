'use strict';
export default function data ()
	{
		return (
			{
				formEvents:
					{
						start:this.formStart,
						success:this.formSuccess,
						error:this.formError,
						end:this.formEnd,
						reset:this.formReset,
					},
				preloader:false,
			});
	}
