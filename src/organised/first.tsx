import React from 'react';
import {WithChildren} from "../types/WithChildren";

const FirstOrganised = ({ children }: WithChildren) => {
    console.log('FirstOrganised render');
    return <div>{children}</div>
}

export default FirstOrganised;
