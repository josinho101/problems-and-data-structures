/**
 * Ref - https://leetcode.com/problems/task-scheduler/
 *
 * Given a characters array tasks, representing the tasks a CPU needs to do,
 * where each letter represents a different task. Tasks could be done in any
 * order. Each task is done in one unit of time. For each unit of time, the
 * CPU could complete either one task or just be idle.
 *
 * However, there is a non-negative integer n that represents the cooldown
 * period between two same tasks (the same letter in the array), that is
 * that there must be at least n units of time between any two same tasks.
 *
 * Return the least number of units of times that the CPU will take to finish
 * all the given tasks.
 *
 * Eg - Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 *
 * Explanation:
 * A -> B -> idle -> A -> B -> idle -> A -> B
 * There is at least 2 units of time between any two same tasks.
 */

var leastInterval = function (tasks, n) {
  const map = {};
  let maxTask = "";
  let maxTaskCount = 0;

  if (!tasks || !tasks.length) {
    return 0;
  }

  if (tasks.length === 1) {
    return 1;
  }

  for (let task of tasks) {
    if (!map[task]) {
      map[task] = 0;
    }

    map[task]++;
    if (map[task] > maxTaskCount) {
      maxTask = task;
      maxTaskCount = map[task];
    }
  }

  let idleTime = (maxTaskCount - 1) * n;
  delete map[maxTask];

  for (let count of Object.values(map)) {
    idleTime -= Math.min(maxTaskCount - 1, count);
  }

  return tasks.length + Math.max(0, idleTime);
};

module.exports = leastInterval;
