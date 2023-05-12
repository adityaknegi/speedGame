import React, { useState, useEffect, useRef } from 'react';
import { Button, Text } from '@/atoms/index';
import Grid from '@/components/Common/Grid';

const NumberGrid = ({ rows = 5, columns = 5 }) => {
  const [timer, setTimer] = useState(0);
  const [currentNumber, setCurrentNumber] = useState([1,2,3,4,5,6,7,8,9]);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [selectValue, setSelectValue] = useState(undefined)
  const userInfo = useRef({miss: 0})

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const preventRefresh = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Required for Chrome
    };

    window.addEventListener('beforeunload', preventRefresh);

    return () => {
      window.removeEventListener('beforeunload', preventRefresh);
    };
  }, []);

  useEffect(()=>{
    if (Math.min(...currentNumber) > (rows * columns)) {
      return stopTimer();
    }
  }, [currentNumber])

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const onClickBox = (value) => {
    if (!isRunning) {
      startTimer();
    }

    if(Math.min(...currentNumber) !== value) {
      userInfo.current.miss++ 

      setTimeout(() => {
        setSelectValue(undefined);
      }, 1000);
      setSelectValue(value)
      return
    }
  
    if (currentNumber.length > 1){
      setCurrentNumber([...currentNumber.filter((number)=>number!==value), Math.max(...currentNumber) + 1])
      return
    }
  };

  const handleSequential = () => {
    if (!isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  const handleRestart = () => {
    setTimer(0)
    intervalRef.current = null
    setCurrentNumber([1,2,3,4,5,6,7,8,9])
  }

  return (
    <section className=" bg-blue-400 bg-opacity-[0.3] pt-10 h-[500px]">
      <div className='flex flex-col'>
        <Grid 
          className ='flex justify-center'
          rows={rows} 
          columns={columns} 
          currentNumber={currentNumber} 
          onClickBox={onClickBox} 
          bgColor={'bg-green-100'}
          bgColorCurrent={'bg-black'}
          selectValue={selectValue}
          />
        <div className="flex justify-center  mt-10">
          <div className="text-lg font-bold mr-10 -mt-1">{timer} seconds</div>
          {isRunning && <Button onClick={handleSequential} className='mr-10'>Pause</Button>}
          <Button onClick={handleRestart}>Restart</Button>
          
        </div>
        {!isRunning && Math.min(...currentNumber) <rows*columns && 
          <Text type='bodyStyleExtraLarge' className='text-red-900 mb-10 flex justify-center mt-1'>
            {`Click on ${currentNumber[0]} or any block to start Game`}
          </Text>}
      
      </div>
    </section>
  );
};

export default NumberGrid;
