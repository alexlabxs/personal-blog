import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Terminal-inspired color palette with brand integration
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        terminal: {
          bg: '#0a0a0a',
          green: '#00ff41',
          dim: '#003b00',
          border: '#1a1a1a',
        },
        code: {
          bg: '#1e1e1e',
          comment: '#6a9955',
          keyword: '#569cd6',
          string: '#ce9178',
          function: '#dcdcaa',
        },
        // Brand colors for alexxiao.dev
        brand: {
          primary: '#2563EB',    // 科技蓝
          secondary: '#8B5CF6',  // 霓虹紫
          accent: '#1F2937',     // 深空灰
          light: '#F9FAFB',      // 浅灰白
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
