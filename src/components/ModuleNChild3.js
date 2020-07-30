import React, { memo } from 'react';
import { JumbotronWrapper } from './common';

function ModuleNChild3() {
	return (
		<JumbotronWrapper title="Module - N - Child - 3" col={{md: '12'}} />
	)
}

export default memo(ModuleNChild3);
