import { expect, it } from 'vitest';
import { KFALL_STAGES, KSHELL_STAGES } from '../src/core/stages';

it('KFall 1~4단계의 낙하 속도, 동시 등장 수, 클리어·실패 조건을 설정한다', () => {
  expect(KFALL_STAGES).toEqual({
    1: { baseFallSpeed: 0.36, maxConcurrent: 1, clearKills: 50, clearSurviveSeconds: 600, failMissCount: 5 },
    2: { baseFallSpeed: 0.47, maxConcurrent: 2, clearKills: 50, clearSurviveSeconds: 600, failMissCount: 5 },
    3: { baseFallSpeed: 0.66, maxConcurrent: 3, clearKills: 50, clearSurviveSeconds: 600, failMissCount: 5 },
    4: { baseFallSpeed: 0.99, maxConcurrent: 4, clearKills: 50, clearSurviveSeconds: 600, failMissCount: 5 },
  });
});

it('KShell 1~3 스테이지의 목표 수, 제한 시간, 개별 타이머, 동시 목표 수를 설정한다', () => {
  expect(KSHELL_STAGES).toEqual({
    1: { targetCount: 5, missionSeconds: 600, perTargetSeconds: null, maxConcurrentTargets: 5 },
    2: { targetCount: 8, missionSeconds: 480, perTargetSeconds: 120, maxConcurrentTargets: 4 },
    3: { targetCount: 12, missionSeconds: 600, perTargetSeconds: 90, maxConcurrentTargets: 5 },
  });
});
