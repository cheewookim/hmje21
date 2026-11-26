// 앱 진입점. 지금은 빈 화면에 제목만 표시한다.
// 3D 월드·게임 루프·UI는 docs/DESIGN.md 의 마일스톤 순서대로 이 위에 쌓는다.
import { APP_TITLE } from './core/meta';

const app = document.getElementById('app');
if (app) {
  app.textContent = APP_TITLE;
  app.style.display = 'grid';
  app.style.placeItems = 'center';
  app.style.fontSize = '2rem';
}
