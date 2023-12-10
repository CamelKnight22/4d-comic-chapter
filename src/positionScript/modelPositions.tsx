import { useMemo } from 'react';

// Define positions for different models as tuples
const positionAttackModel: [number, number, number] = [0, 0, 5];
const positionIdleModel: [number, number, number] = [0,0, 2];
const positionMoveModel: [number, number, number] = [0, 0, 3];

// Custom hook to memoize model positions
export const useModelPositions = () => {
  const memoizedPositionAttack = useMemo(() => positionAttackModel, []);
  const memoizedPositionIdle = useMemo(() => positionIdleModel, []);
  const memoizedPositionMove = useMemo(() => positionMoveModel, []);

  return {
    memoizedPositionAttack,
    memoizedPositionIdle,
    memoizedPositionMove
  };
};