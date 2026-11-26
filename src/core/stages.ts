export type KFallStage = 1 | 2 | 3 | 4;
export type KShellStage = 1 | 2 | 3;

export interface KFallStageConfig {
  readonly baseFallSpeed: number;
  readonly maxConcurrent: number;
  readonly clearKills: number;
  readonly clearSurviveSeconds: number;
  readonly failMissCount: number;
}

export interface KShellStageConfig {
  readonly targetCount: number;
  readonly missionSeconds: number;
  readonly perTargetSeconds: number | null;
  readonly maxConcurrentTargets: number;
}

const kfallConditions = { clearKills: 50, clearSurviveSeconds: 600, failMissCount: 5 };

export const KFALL_STAGES: Readonly<Record<KFallStage, KFallStageConfig>> = {
  1: { ...kfallConditions, baseFallSpeed: 0.36, maxConcurrent: 1 },
  2: { ...kfallConditions, baseFallSpeed: 0.47, maxConcurrent: 2 },
  3: { ...kfallConditions, baseFallSpeed: 0.66, maxConcurrent: 3 },
  4: { ...kfallConditions, baseFallSpeed: 0.99, maxConcurrent: 4 },
};

export const KSHELL_STAGES: Readonly<Record<KShellStage, KShellStageConfig>> = {
  1: { targetCount: 5, missionSeconds: 600, perTargetSeconds: null, maxConcurrentTargets: 5 },
  2: { targetCount: 8, missionSeconds: 480, perTargetSeconds: 120, maxConcurrentTargets: 4 },
  3: { targetCount: 12, missionSeconds: 600, perTargetSeconds: 90, maxConcurrentTargets: 5 },
};
