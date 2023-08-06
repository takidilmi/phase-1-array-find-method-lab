// code your solution here
/* 
function superbowlWin(superbowls) {
    const winningYear = superbowls.find((game) => game.result === "W");
  
    return winningYear ? winningYear.year : undefined;
  } */
  
  const superbowlWin = (superbowls) => (superbowls.find((game) => game.result === "W") || {}).year;