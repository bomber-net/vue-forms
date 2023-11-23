'use strict';
import {pickBy} from 'lodash/object';

export default function filteredOptions ()
	{
		let isArray=Array.isArray (this.optionsList);
		if (!this.search) return isArray?[]:{};
		let search=new RegExp(this.search,'i');
		return isArray?this.optionsList.filter (option=>search.test (option)):pickBy (this.optionsList,option=>search.test (option));
	}
