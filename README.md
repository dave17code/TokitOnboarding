# 온보딩

똑똑한 개발자 프론트엔드 싧무진 분들을 위한 온보딩 세션입니다.

주어진 과제를 순차적으로 진행해주시고 결과물을 본인 브랜치에 PR생성하여 올려주세요.

# 제작 이유

해당 과제는 새로워진 보일러플레이트에 쉽게 적응하기 위해 제작된 온보딩입니다. 온보딩 안에 세부적으로 과제들이 있기에 혹여 부담이 되실까 우려가 됩니다.

그동안 시스템 작업을 하며 실무진 분들께 들었던 피드백들을 정리해 보았습니다.

> 1.  기능 추가가 되어도 익숙해지기까지 시간이 걸리며, 뭘 위한 기능인지 모를 때도 많다.
> 2.  프론트엔드 팀에 정의된 컨벤션이 지켜지지 않은 경우가 있어 협업이 어려운 경우가 있다.
> 3.  모노레포로 변환되고, 패키지 분리가 되어 오히려 실무진 분들이 사용시 어려움을 느낄까 우려된다.
> 4.  특정 시점 이전으로 온보딩이 제대로 이뤄지지 않아 그동안 몰랐던 기능들이 많았다.

그동안 변경사항이 있을 때 공지를 하거나, 문서로 기재해서 링크를 드렸지만, 변경 점이 익숙해지기 어렵거나, 보시지 않는 경우도 더러 있는 것 같습니다.
협업을 하는데 있어서 보일러플레이트의 기능을 잘 활용하고, 컨벤션을 지키는 것은 필수적입니다.

저희가 이러한 과제들을 통해서 실무진 분들이 보일러플레이트, 개발한 기능에 익숙해지시고, 보다 더 잘 활용하여 훌륭한 프로덕트를 완성시킬 수 있기를 기대합니다.

실무진 분들의 실력을 체크하기 위한 과제가 아니니, 과제의 과정에서 질문은 주저없이 해주세요.

# Notice

- 과제당 기간이 주어지기는 하지만, 담당하신 외주 작업이 우선적으로 진행되어야하기 때문에,
  기간이 더 필요하신 분들은 아래 양식에 맞춰 과제 노션 란에 기재해주세요.
  - [성함]/[담당하고있는 외주 프로젝트]/[마감기한]/[과제 완료 예상 날짜]

# 작업 규칙

## 1. main 기준 본인이름의 브랜치 생성

```bash
git clone https://github.com/TOKTOKHAN-DEV/Onboarding-fe.git
git checkout -b "김똑개"
```

## 2. tokit 으로 프로젝트 클론시 주어진 과제의 템플릿에 맞는 이름을 적어주세요.

## 2-1. tokit 설치

```bash
npm i -g @toktokhan-dev/tokit
```

## 2-2. run tokit

```
tokit
```

## 2-3. Interactive response

그런 다음, 대화형 프롬포트의 응답을 아래와 같이 해주세요.

예시로, [24.06.18 과제] T-01 next-page-router 과제라면

```
// 해당 과제의 템플릿이름을 폴더 이름으로 기재해주세요.
What is your project named?  next-page-router
```

```
// 과제에 맞는 템플릿을 선택해주세요.
What is your template?  <next-page-router>
```

```
// pnpm 으로 통일해주세요.
What is your package manager?  pnpm
```

```
// No로 통일해주세요.
Would you like to create a remote repository on GitHub?  No
```

# 과제 안내

2024.06.17

- next-page-router.md
- next-app-router.md
- react-native.md