import { getMockPoint } from '../mock/point.js';

const TASK_COUNT = 4;

export default class PointsModel {
  #points = Array.from({ length: TASK_COUNT }, () => getMockPoint());

  get points() {
    return [...this.#points];
  }
}
