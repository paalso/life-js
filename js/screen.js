const getFieldSize = () => {
  const styles = getComputedStyle(document.documentElement);
  const cellSize = styles.getPropertyValue("--cell-size").trim();
  return cellSize;
};
