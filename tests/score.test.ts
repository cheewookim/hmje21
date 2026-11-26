import { describe, expect, it } from 'vitest';
import {
  comboMultiplier, kfallScore, kshellClearBonus, kshellDirectScore, kshellHitResult,
  kshellNearScore, reactionMultiplier, speedFactor, speedLevel,
} from '../src/core/score';

describe('KFall 점수와 속도', () => {
  it.each([
    [0, 3], [1000, 3], [1001, 2.5], [2000, 2.5], [2001, 2], [3000, 2],
    [3001, 1.5], [5000, 1.5], [5001, 1.2], [10000, 1.2], [10001, 1],
  ])('%i ms의 반응 배율은 %f다', (elapsedMs, expected) => {
    expect(reactionMultiplier(elapsedMs)).toBe(expected);
  });

  it.each([[0, 1], [4, 1], [5, 1.5], [9, 1.5], [10, 2], [15, 2.5]])(
    '%i 콤보의 배율은 %f다', (combo, expected) => {
      expect(comboMultiplier(combo)).toBe(expected);
    },
  );

  it.each([[10001, 0, 100], [1000, 5, 450], [2000, 9, 375], [10000, 10, 240]])(
    '%i ms와 %i 콤보의 격파 점수는 %i점이다', (elapsedMs, combo, expected) => {
      expect(kfallScore(elapsedMs, combo)).toBe(expected);
    },
  );

  it.each([
    [0, 1], [59, 1], [60, 2], [119, 2], [120, 3], [179, 3], [180, 4],
    [239, 4], [240, 5], [299, 5], [300, 6], [359, 6], [360, 7], [419, 7],
    [420, 8], [479, 8], [480, 9], [540, 9], [600, 9],
  ])('%i초의 속도 레벨은 %i다', (elapsedSeconds, expected) => {
    expect(speedLevel(elapsedSeconds)).toBe(expected);
  });

  it.each([[1, 1], [2, 1.2], [3, 1.44], [9, 4.29981696]])(
    '레벨 %i의 속도 배율은 %f다', (level, expected) => {
      expect(speedFactor(level)).toBeCloseTo(expected, 10);
    },
  );
});

describe('KShell 판정과 점수', () => {
  it.each([
    { error: 0, expected: 'direct' },
    { error: 1, expected: 'near' },
    { error: 2, expected: 'near' },
    { error: 3, expected: 'near' },
    { error: 4, expected: 'miss' },
    { error: 27, expected: 'miss' },
  ])('오차 $error의 판정은 $expected다', ({ error, expected }) => {
    expect(kshellHitResult(error)).toBe(expected);
  });

  it.each([
    { remainingMs: null, expected: 200 },
    { remainingMs: 119500, expected: 1390 },
    { remainingMs: 0, expected: 200 },
  ])('개별 타이머가 $remainingMs일 때 직격은 $expected점이다', ({ remainingMs, expected }) => {
    expect(kshellDirectScore(remainingMs)).toBe(expected);
  });

  it.each([[1, 60], [2, 30], [3, 20], [6, 10], [7, 10], [7 / 2, 17]])(
    '오차 %f의 근접 점수는 %i점이다', (error, expected) => {
      expect(kshellNearScore(error)).toBe(expected);
    },
  );

  it.each([[600000, 6000], [0, 0], [9999, 90]])(
    '미션 남은 시간이 %i ms일 때 클리어 보너스는 %i점이다', (remainingMs, expected) => {
      expect(kshellClearBonus(remainingMs)).toBe(expected);
    },
  );
});
