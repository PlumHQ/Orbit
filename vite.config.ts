import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { glob } from 'glob'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React optimizations
      babel: {
        plugins: [
          // Remove unused React imports
          ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]
        ]
      }
    }),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*', 'design-system-test/**/*'],
      exclude: ['**/*.stories.*', '**/*.test.*', '**/storybook-static/**']
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 6006,
    allowedHosts: [
      'orbit.plumhq.com',
      'localhost',
      '127.0.0.1'
    ]
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PlumDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }
          return assetInfo.name;
        },
        // Enable tree shaking
        manualChunks: undefined,
        // Optimize chunk splitting
        chunkFileNames: '[name]-[hash].js'
      },
      // Enable tree shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      }
    },
    // Advanced minification
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console logs in production
        drop_console: true,
        drop_debugger: true,
        // Remove unused code
        dead_code: true,
        // Optimize conditionals
        conditionals: true,
        // Optimize boolean expressions
        booleans: true,
        // Remove unused variables
        unused: true,
        // Optimize if statements
        if_return: true,
        // Join consecutive var statements
        join_vars: true,
        // Optimize sequences
        sequences: true,
        // Remove side-effect-free statements
        side_effects: false,
        // Advanced optimizations
        passes: 2
      },
      mangle: {
        // Mangle variable names
        toplevel: true,
        // Keep class names for debugging
        keep_classnames: false,
        // Keep function names for debugging
        keep_fnames: false
      },
      format: {
        // Remove comments
        comments: false,
        // Optimize whitespace
        beautify: false
      }
    },
    // Disable source maps for smaller builds
    sourcemap: false,
    emptyOutDir: true,
    // Optimize CSS
    cssCodeSplit: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable compression
    reportCompressedSize: true,
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@radix-ui/react-dialog', '@radix-ui/react-tabs']
  }
})