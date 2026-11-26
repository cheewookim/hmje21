export function reactionMultiplier(elapsedMs: number): number {
  if (elapsedMs <= 1000) return 3;
  if (elapsedMs <= 2000) return 2.5;
  if (elapsedMs <= 3000) return 2;
  if (elapsedMs <= 5000) return 1.5;
  if (elapsedMs <= 10000) return 1.2;
  return 1;
}

export function comboMultiplier(combo: number): number {
  return 1 + 0.5 * Math.floor(combo / 5);
}

export function kfallScore(elapsedMs: number, combo: number): number {
  return Math.round(100 * reactionMultiplier(elapsedMs) * comboMultiplier(combo));
}

export function speedLevel(elapsedGameSeconds: number): number {
  return Math.min(9, 1 + Math.floor(elapsedGameSeconds / 60));
}

export function speedFactor(level: number): number {
  return 1.2 ** (level - 1);
}

/** 오차는 두 축 인덱스 차이의 절댓값이다. */
export function kshellHitResult(error: number): 'direct' | 'near' | 'miss' {
  if (error === 0) return 'direct';
  if (error <= 3) return 'near';
  return 'miss';
}

export function kshellDirectScore(perTargetRemainingMs: number | null): number {
  return 200 + Math.floor((perTargetRemainingMs ?? 0) / 1000) * 10;
}

export function kshellNearScore(error: number): number {
  return Math.max(10, Math.floor(60 / error));
}

export function kshellClearBonus(missionRemainingMs: number): number {
  return Math.floor(missionRemainingMs / 1000) * 10;
}
