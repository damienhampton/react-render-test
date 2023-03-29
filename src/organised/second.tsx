import React from 'react';

export type SecondOrganisedProps = {
    num: number;
}
const SecondOrganised = ({ num }: SecondOrganisedProps ) => {
    console.log('SecondOrganised render', num);
    return <div>SecondOrganised {num}</div>
}

export default SecondOrganised;
