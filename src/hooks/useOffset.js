import { useReducer, useRef } from 'react';
import { debounce } from '../utils/debounce';
import { useIsoMorphicEffect } from './useIsoMorphicEffect';

const initialOffsets = {
  'project-1': { x: 0, y: -800 },
  'project-2': { x: 0, y: -800 },
  'project-3': { x: 0, y: -800 },
  'project-4': { x: 0, y: -800 },
};

export function useOffset(cardIds) {
  const offsetsRef = useRef(initialOffsets);
  const [, force] = useReducer((x) => x + 1, 0);

  useIsoMorphicEffect(() => {
    const calc = () => {
      const next = {};
      for (const id of cardIds) {
        const grid = document.querySelector(`[data-grid-id="${id}"]`);
        const hero = document.querySelector('[data-stack-target-id]');
        if (!grid || !hero) continue;
        const g = grid.getBoundingClientRect();
        const h = hero.getBoundingClientRect();
        next[id] = { x: h.left - g.left, y: h.top - g.top };
      }
      offsetsRef.current = next;
      force();
    };

    const debouncedCalc = debounce(calc, 50);
    const ro = new ResizeObserver(debouncedCalc);
    ro.observe(document.documentElement);

    calc();

    return () => ro.disconnect();
  }, [cardIds]);

  return offsetsRef.current;
}
