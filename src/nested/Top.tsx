import FirstNested from "./first";
import SecondNested from "./second";

export type TopNestedProps = {
    nums2d: number[][];
}

const TopNested = ({ nums2d }: TopNestedProps) => {
    console.log('TopNested render');
    return <div>
        <SecondNested num={100} />
        {nums2d.map((nums, i) => <FirstNested nums={nums} key={'f'+i}/>)}
    </div>
}

export default TopNested;
