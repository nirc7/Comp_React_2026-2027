import { useEffect, useState } from "react";

export default function Person(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [data, setData] = useState({ num1: 1, num2: 2 });

  console.log('before person');


  const btnAddOne = () => {
    //setCount(7);
    setCount(pervC => pervC + 1);
    //setData({ num1: 7, num2: data.num2 });
    //code...
    setData({ ...data, num1: 7 });
  }

  const btnAddOne2 = () => {
    setCount2(pervC2 => pervC2 + 1);
  }


  useEffect(() => {
    console.log('eseeffect');
  });

  useEffect(() => {
    console.log(' count effect');
  }, [count]);


  useEffect(() => {
    console.log(' count, count2 effect');
  }, [count, count2]);


  useEffect(() => {
    console.log(' count2 effect');
  }, [count2]);

  useEffect(() => {
    console.log(' did mount');

    return () => {
      console.log('will unmount'); 
    }
  }, []);


  console.log('after person');

  return (
    <div>
      <h3>Person</h3>
      <button onClick={btnAddOne} >Add One</button> <br />
      count={count} <br />
      <button onClick={btnAddOne2} >Add One2</button> <br />
      count2 ={count2} <br />
      num1={data.num1} <br />
      num2={data.num2}
    </div>
  )
}
