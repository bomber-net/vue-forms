'use strict';
import {toPairs} from 'lodash/object';

export default function orderedOptions ()
	{
		let orderer=this.optionsOrderer;
		let options=toPairs (this.options);
		if (!(orderer && typeof (orderer)==='function')) return options;
		return orderer (options);
	}
