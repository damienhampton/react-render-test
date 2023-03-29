import React, {useState} from 'react';
import './App.css';
import TopNested from "./nested/Top";
import SecondOrganised from "./organised/second";
import FirstOrganised from "./organised/first";
import TopOrganised from "./organised/Top";


function App() {
    const [nums2d, setNums2d] = useState([
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ]);

    const update = () => {
        setNums2d(nums2d.map(nums => nums.map(num => num + 1)));
    }


    return (
    <div className="App">
        <button onClick={update}>Update</button>
        <TopOrganised second={<SecondOrganised num={200} />}>
            {nums2d.map((nums,i) => {
                return <FirstOrganised key={'fo'+i}>
                    {nums.map((num,j) => <SecondOrganised num={num} key={'so'+j}/>)}
                </FirstOrganised>
            })}
        </TopOrganised>
      {/*<TopNested nums2d={nums2d} />*/}
    </div>
  );
}

export default App;
