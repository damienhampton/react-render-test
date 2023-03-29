import React from 'react';
import SecondNested from "./second";

export type FirstNestedProps = {
    nums: number[];
}
const FirstNested = ({ nums }: FirstNestedProps) => {
    console.log('FirstNested render');
    return <div>{nums.map((num, i) => <SecondNested num={num} key={'s'+i}/>)}</div>
}

export default FirstNested;
