import React from 'react';

export type SecondNestedProps = {
    num: number;
}
const SecondNested = ({ num }: SecondNestedProps ) => {
    console.log('SecondNested render', num);
    return <div>SecondNested {num}</div>
}

export default SecondNested;
