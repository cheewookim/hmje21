import { describe, expect, it } from 'vitest';
import { APP_TITLE } from '../src/core/meta';

// 테스트 도구가 동작하는지만 확인하는 첫 테스트. 게임 규칙 테스트가 아니다.
describe('project smoke', () => {
  it('has the game title', () => {
    expect(APP_TITLE).toBe('훈민정음21');
  });
});
