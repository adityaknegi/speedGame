import React from "react";
import { Heading, Text } from "@/atoms/index";

const AboutGameBio = () => {
  return (
<section className="text-center mx-auto bg-green-100 bg-opacity-[0.4] p-10  text-black" id='About'>
      <Heading type="h1" className="text-center">
        About the Game
      </Heading>
      <Text type="bodyStyleMedium" className="mt-10 text-start">
        How to play:
      </Text>
      <ol className="text-left list-decimal mt-4 ml-10 m-1 ">
        <li>
          Click on the "Start" button to begin the game.
        </li>
        <li>
          Locate the number "1" on the grid and click on it.
        </li>
        <li>
          Find the next number in ascending order, and click on it.
        </li>
        <li>
          Keep clicking on numbers in ascending order until you reach the last number on the grid.
        </li>
        <li>
          Once you click on the last number, the timer will stop and your game time will be displayed.
        </li>
        <li>
          If you need to take a break or pause the game, click on the "Stop" button. You can resume the game by clicking on any number again.
        </li>
        <li>
          If you want to start a new game, click on the "Restart" button.
        </li>
        <li>
          Have fun!
        </li>
      </ol>
    </section>
  );
};

export default AboutGameBio;
