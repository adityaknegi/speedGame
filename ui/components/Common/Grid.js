import React, {useEffect, useState, useRef} from "react";
import Box from "@/atoms/Box";

const Grid = ({ rows, columns, boxSize = 50, onClickBox, selectValue , className, bgColor='bg-green-100',bgColorCurrent= 'bg-black', currentNumber = [1] }) => {
  const rowNumbers = useRef(Array.from({ length: rows }, (_, i) => i + 1));
  const columnNumbers = useRef(Array.from({ length: columns }, (_, i) => i + 1));

  const [shuffledData, setShuffledData] = useState([])

  useEffect(()=>{
    const sequence = Array.from({ length: rows * columns }, (_, i) => i + 1)
    setShuffledData(sequence.sort(() => Math.random() - 0.5))
  
  }, [])


  
  const gridColumnTemplate = `repeat(${columns}, ${boxSize}px)`;

  return (
    <div className={`${className}`}>
      <div className="grid" style={{ gridTemplateColumns: gridColumnTemplate }}>
        {rowNumbers.current.map((row) =>
          columnNumbers.current.map((col) => (
            <Box key={`${row}-${col}`} width={boxSize} height={boxSize} 
              className = {`border-4 p-1 flex justify-center items-center bgWhite  
                ${shuffledData[(row-1)*columns + col-1] === selectValue && 'bg-red-400 hover-rotate'} 
                ${currentNumber.includes(shuffledData[(row-1)*columns + col-1]) ? bgColor + ' cursor-pointer' : bgColorCurrent}`}  
              onClick={()=>onClickBox(shuffledData[(row-1)*columns + col-1])}
              
            > 
              {shuffledData.length > (row-1)*columns + col-1 && currentNumber.includes(shuffledData[(row-1)*columns + col-1]) &&
              shuffledData[(row-1)*columns + col-1]
              }

            </Box>
          ))
        )}
      </div>
    </div>
  );
};

export default Grid;
