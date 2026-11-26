import { describe, expect, it } from 'vitest';
import {
  CHOSEONG, JUNGSEONG, JONGSEONG, GAP,
  choTarget, compose, decompose, jamoToChoIndex, jamoToJungIndex,
  jongTarget, jungTarget, syllableToCoord,
} from '../src/core/hangul';

const expectedCho = 'ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ'.split(' ');
const expectedJung = 'ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ'.split(' ');
const expectedJong = ['', ...'ㄱ ㄲ ㄳ ㄴ ㄵ ㄶ ㄷ ㄹ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅁ ㅂ ㅄ ㅅ ㅆ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ'.split(' ')];

const syllables = [
  { syllable: '가', code: 0xac00, indices: { cho: 0, jung: 0, jong: 0 }, coord: { x: 0, y: 0, z: 0 } },
  { syllable: '힣', code: 0xd7a3, indices: { cho: 18, jung: 20, jong: 27 }, coord: { x: 54, y: 60, z: 81 } },
  { syllable: '한', code: 0xd55c, indices: { cho: 18, jung: 0, jong: 4 }, coord: { x: 54, y: 0, z: 12 } },
  { syllable: '괌', code: 0xad0c, indices: { cho: 0, jung: 9, jong: 16 }, coord: { x: 0, y: 27, z: 48 } },
];

describe('한글 자모', () => {
  it('유니코드 조합 순서와 종성의 빈 첫 자리를 유지한다', () => {
    expect(CHOSEONG).toEqual(expectedCho);
    expect(JUNGSEONG).toEqual(expectedJung);
    expect(JONGSEONG).toEqual(expectedJong);
  });

  it('현대 호환용 자모를 해당 축의 인덱스로 변환한다', () => {
    expectedCho.forEach((jamo, index) => expect(jamoToChoIndex(jamo)).toBe(index));
    expectedJung.forEach((jamo, index) => expect(jamoToJungIndex(jamo)).toBe(index));
  });

  it.each('ㄳ ㄵ ㄶ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅄ'.split(' '))('겹받침 %s의 초성 인덱스는 없다', (jamo) => {
    expect(jamoToChoIndex(jamo)).toBeNull();
  });

  it('해당 축의 현대 호환용 자모만 받는다', () => {
    expect(jamoToChoIndex('ㅏ')).toBeNull();
    expect(jamoToChoIndex('ᄀ')).toBeNull();
    expect(jamoToChoIndex('ㄱㄴ')).toBeNull();
    expect(jamoToJungIndex('ㄱ')).toBeNull();
    expect(jamoToJungIndex('ᅡ')).toBeNull();
    expect(jamoToJungIndex('ㆍ')).toBeNull();
    expect(jamoToJungIndex('ㅏㅣ')).toBeNull();
  });
});

describe('한글 음절', () => {
  it.each(syllables)('$syllable 음절의 분해, 조합, 좌표가 일치한다', ({ syllable, code, indices, coord }) => {
    const result = decompose(syllable);
    expect(result).toEqual(indices);
    expect(compose(result!)).toBe(code);
    expect(syllableToCoord(syllable)).toEqual(coord);
  });

  it.each(['', 'A', '1', 'ㄱ', 'ㅏ', ' ', '가나', '가A', '가', '😀', '\uabff', '\ud7a4'])('완성형 음절 하나가 아닌 입력 %j는 null을 반환한다', (input) => {
    expect(decompose(input)).toBeNull();
    expect(syllableToCoord(input)).toBeNull();
  });
});

describe('축별 포탄 목표', () => {
  it('좌표 간격은 3이다', () => {
    expect(GAP).toBe(3);
  });

  it('각 축의 인덱스 0은 원점이다', () => {
    const origin = { x: 0, y: 0, z: 0 };
    expect(choTarget(0)).toEqual(origin);
    expect(jungTarget(0)).toEqual(origin);
    expect(jongTarget(0)).toEqual(origin);
  });

  it('각 축의 최대 인덱스는 해당 축의 좌표만 바꾼다', () => {
    expect(choTarget(18)).toEqual({ x: 54, y: 0, z: 0 });
    expect(jungTarget(20)).toEqual({ x: 0, y: 60, z: 0 });
    expect(jongTarget(27)).toEqual({ x: 0, y: 0, z: 81 });
  });
});
