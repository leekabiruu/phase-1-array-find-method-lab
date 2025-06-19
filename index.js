// code your solution here
const record = [
    {
        year: 2016,results: "Winners",
        year: 2017,results: "N/A",
        year: 2018,results: "Losers",
    }
]

function superbowlWin(record) {
  const win = record.find(obj => obj.result === "W");

  if (win) {
    return win.year;
  } else {
    return undefined;
  }
 
}
 console.log(superbowlWin(record))