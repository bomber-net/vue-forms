'use strict';
export default function viewTags (view)
	{
		if (!view) this.$emit ('update:modelValue',this.checked.map (i=>i));
	}
