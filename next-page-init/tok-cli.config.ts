import { RootConfig } from '@toktokhan-dev/cli'
import { commit } from '@toktokhan-dev/cli-plugin-commit'
import { genApi } from '@toktokhan-dev/cli-plugin-gen-api-react-query'
import { genIcon } from '@toktokhan-dev/cli-plugin-gen-icon-chakra'
import { genImg } from '@toktokhan-dev/cli-plugin-gen-img'
import { genRoutePage } from '@toktokhan-dev/cli-plugin-gen-route-pages'
import { genTheme } from '@toktokhan-dev/cli-plugin-gen-theme-chakra'

// 새로 만든 플러그인 import
import { printText } from './src/scripts/plugin-text'

// 정확한 경로 유지

const config: RootConfig<{
  plugins: [
    typeof genImg,
    typeof genRoutePage,
    typeof genApi,
    typeof genTheme,
    typeof genIcon,
    typeof commit,
    typeof printText,
  ]
}> = {
  plugins: [genImg, genRoutePage, genApi, genTheme, genIcon, commit, printText],
  'gen:img': {
    input: 'public/images',
    oneDepth: true,
    basePath: '/images',
  },
  'gen:route': {
    oneDepth: true,
  },
  'gen:api': {
    swaggerSchemaUrl: 'http://localhost:5001/api-json',
    output: 'src/generated/swagger',
    instancePath: '@/cofigs/axios/instance',
    includeReactQuery: true,
    includeReactInfiniteQuery: true,
    paginationSets: [
      {
        keywords: ['cursor', 'limit'],
        nextKey: 'cursor',
        getNextPageParam: `(lastPage) => { return lastPage.next }`,
      },
    ],
  },
  'gen:theme': {
    tokenModes: {
      colors: {
        light: 'light',
        dark: 'dark',
      },
      textStyles: {
        base: 'mobile',
        sm: 'tablet',
        md: 'desktop',
      },
    },
  },
  'gen:icon': {
    input: 'public/icons',
  },
  'print:text': {
    output: 'generated/print-text.txt', // 기본 출력 경로
    input: 'Hello World!', // 기본 입력 값
  },
}

export default config
