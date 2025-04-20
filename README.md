### 고민점

- packages -> npm에 업로드될 독립적인 라이브러리 / apps - 프로젝트 
  - ui 라이브러리를 npm에 배포할것이기 때문에 독립적이어야 하는데 apps에 가져다 쓸때는 독립성이 유지되지 않아도 되지 않나?
  - 데브 환경에서는 ui package의 실시간 수정이 반영되어야 함. 
- vanilla-extract로 생성된 .css.ts 파일들을 ui package에서 build를 할 것인가? 쓰는 유저가 알아서 빌드하도록 할 것인가?
  - vanilla-extract를 쓰지 않는 환경까지 고려할 필요가 있다면 패키지에서 빌드해서 내보내는 것이 좋지 않을까?
- esmodules과 commonjs를 모두 제공할 것인가? 
  - vite가 있으니깐 이용하는 김에 모두 제공도 가능.. or 굳이 필요없지 않은가? ui를 쓰는 환경 자체가 type=module인 경우가 대부분이지 않나?
- tree-shaking 지원?
- 



### 정리
- app/playground -> tailwindcss로 css 설정 : 확장성 고려 위해서
- 