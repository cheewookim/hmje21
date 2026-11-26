# 훈민정음21 (HMJE21)

한글 자모(초성·중성·종성)를 3D 좌표계로 보여 주는 한글 학습 슈팅 게임의 웹 재제작판입니다.
설계와 규칙은 [docs/DESIGN.md](docs/DESIGN.md)에 있습니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버 (브라우저에서 열기)
npm test         # 타입 검사 + 테스트
npm run build    # 배포용 빌드 → dist/
```

## 기술

TypeScript, Three.js, Vite, Vitest
