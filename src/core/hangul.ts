export const CHOSEONG: readonly string[] = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

export const JUNGSEONG: readonly string[] = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
  'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ',
];

export const JONGSEONG: readonly string[] = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ',
  'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

export const GAP = 3;

const FIRST_SYLLABLE = 0xac00;
const LAST_SYLLABLE = 0xd7a3;
const SYLLABLES_PER_CHO = JUNGSEONG.length * JONGSEONG.length;

export interface SyllableIndices {
  cho: number;
  jung: number;
  jong: number;
}

export interface Coord {
  x: number;
  y: number;
  z: number;
}

export function decompose(syllable: string): SyllableIndices | null {
  if (syllable.length !== 1) return null;

  const code = syllable.charCodeAt(0);
  if (code < FIRST_SYLLABLE || code > LAST_SYLLABLE) return null;

  const offset = code - FIRST_SYLLABLE;
  return {
    cho: Math.floor(offset / SYLLABLES_PER_CHO),
    jung: Math.floor((offset % SYLLABLES_PER_CHO) / JONGSEONG.length),
    jong: offset % JONGSEONG.length,
  };
}

export function compose({ cho, jung, jong }: SyllableIndices): number {
  return FIRST_SYLLABLE + (cho * JUNGSEONG.length + jung) * JONGSEONG.length + jong;
}

export function jamoToChoIndex(jamo: string): number | null {
  const index = CHOSEONG.indexOf(jamo);
  return index === -1 ? null : index;
}

export function jamoToJungIndex(jamo: string): number | null {
  const index = JUNGSEONG.indexOf(jamo);
  return index === -1 ? null : index;
}

export function syllableToCoord(syllable: string): Coord | null {
  const indices = decompose(syllable);
  if (indices === null) return null;

  const { cho, jung, jong } = indices;
  return { x: cho * GAP, y: jung * GAP, z: jong * GAP };
}

export function choTarget(cho: number): Coord {
  return { x: cho * GAP, y: 0, z: 0 };
}

export function jungTarget(jung: number): Coord {
  return { x: 0, y: jung * GAP, z: 0 };
}

export function jongTarget(jong: number): Coord {
  return { x: 0, y: 0, z: jong * GAP };
}
