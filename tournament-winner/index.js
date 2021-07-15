/**
 * Ref - https://www.algoexpert.io/questions/Tournament%20Winner
 */

function tournamentWinner(competitions, results) {
  const map = {};
  const length = competitions.length;

  for (let i = 0; i < length; i++) {
    const teams = competitions[i];
    const result = results[i];
    const winner = result === 1 ? teams[0] : teams[1];
    if (!map[winner]) {
      map[winner] = 0;
    }
    map[winner]++;
  }

  let max = 0;
  let team = "";
  for (let t of Object.keys(map)) {
    if (map[t] > max) {
      team = t;
      max = map[t];
    }
  }

  return team;
}
