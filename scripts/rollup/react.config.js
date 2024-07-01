import { getPackageJSON, resolvePkgPath, getBaseRollupPlugins } from './utils'

const { name, module } = getPackageJSON('react')
// react包地址
const pkgPath = resolvePkgPath(name)
// react产物地址
const pkgDistPath = resolvePkgPath(name, true)

export default [
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${pkgDistPath}/index.js`,
      name: 'index.js',
      format: 'umd'
    },
    plugins: getBaseRollupPlugins()
  }
]
