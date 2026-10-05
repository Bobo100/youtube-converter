import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  {
    // React Compiler 系列規則：舊程式在 effect 裡同步 setState,行為正常，先只提醒
    rules: {
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'dist/**', 'next-env.d.ts']),
])
