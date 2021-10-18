interface Event{
  type: string;
  timeStamp: number;
  target: Target;
  currentTarget: Target;
  touches: Touche[];
  changedTouches: Touche[];
  detail: {
    x: number;
    y: number;
  }
}

interface Target{
  dataset: Record<string, string | number | symbol>;
  id: string;
  offsetLeft: number;
  offsetTop: number;
}
interface Touche{
  clientX: number;
  clientY: number;
  force: number;
  identifier: number;
  pageX: number;
  pageY: number;
}