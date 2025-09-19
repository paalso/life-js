// import { getFieldSize } from screen.js;

const getFieldSize = () => {
  // const totalScreenWidth = window.screen.width;
  // const totalScreenHeight = window.screen.height;

  // console.log(totalScreenWidth, totalScreenHeight);

  // const styles = getComputedStyle(document.documentElement);
  // const cellSize = parseInt(styles.getPropertyValue("--cell-size").trim());

  // console.log(cellSize); // "20px"

  // const screenWidth = totalScreenWidth / cellSize;
  // const screenHeight = totalScreenHeight / cellSize;

  const screenWidth = 60;
  const screenHeight = 40;

  return { screenWidth, screenHeight };
};

console.log(getFieldSize());
