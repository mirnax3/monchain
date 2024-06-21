import { createUniqueShape, SHAPES } from 'lib/monfrog/monfrogShapes';
import { atom } from 'recoil';
import { MonFrogShape } from 'types/monfrog';

export const monfrogAtom = atom<MonFrogShape>({
  key: 'monfrogAtom',
  default: createUniqueShape(SHAPES[3])
});
