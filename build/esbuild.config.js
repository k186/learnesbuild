/**
 * Created by k186 on 2021/7/21.
 * Name:
 * GitHub:
 * Email: k1868548@gmail.com
 */
require('esbuild').build({
  entryPoints: {
    index: './src/main.js'
  },
  outdir: 'dist',
  bundle: true,
  minify: false,
  sourcemap: true,
  splitting: true,
  chunkNames: 'chunks/[name]-[hash]',
  format: 'esm',/*umd hack
  https://github.com/jacobp100/technicalc-core/blob/master/packages/technicalc-prebuilt/build.js#L88-L109
  
  */
  target: [
    'chrome49'
  ],
  watch: {
    onRebuild(error, result) {
      if (error) {
        console.log(error)
      } else {
        console.log('watching build successed...')
      }
    }
  }
}).then(result => {
  // result.stop();
})