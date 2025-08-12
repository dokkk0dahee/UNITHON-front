/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Pretendardvariable', 'Pretendard', 'system-ui', 'sans-serif'],
      'pretendard': ['Pretendardvariable', 'Pretendard', 'sans-serif'],
    },
    extend: {
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      
      //그림자
      boxShadow: {
        'custom-6-10': '0 6px 10px 0 rgba(0, 0, 0, 0.10)',
        'custom-light': '0 4px 4px 0 rgba(0, 0, 0, 0.10)',
      },

      // 모바일 전용 색상 팔레트
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
        }
      },
      // 모바일 전용 폰트 크기
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      // 모바일 전용 간격
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
      },
      // 모바일 전용 애니메이션
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      // 모바일 전용 그리드
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(140px, 1fr))',
        'responsive-sm': 'repeat(auto-fit, minmax(120px, 1fr))',
      },
      // 모바일 전용 높이
      height: {
        'screen-90': '90vh',
        'screen-85': '85vh',
        'screen-80': '80vh',
      },
      // 모바일 전용 너비
      width: {
        'screen-90': '90vw',
        'screen-85': '85vw',
        'screen-80': '80vw',
      },
      // z-index 확장
      zIndex: {
        '1000': '1000',
        '1001': '1001',
        '1002': '1002',
      },
    },
    // 스마트폰 기종별 브레이크포인트 (최소화)
    screens: {
      'xs': '375px',    // iPhone SE (1세대)
      'xs-sm': '390px', // iPhone 12/13/14
      'sm': '414px',    // iPhone Plus/Pro Max
      'sm-md': '428px', // iPhone 14 Plus
      'md': '768px',    // iPad (세로)
      'lg': '1024px',   // iPad (가로) - 제한적 사용
    },
  },
  plugins: [
    // 스크롤바 숨김 플러그인
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-default': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',
          /* Firefox */
          'scrollbar-width': 'auto',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block'
          }
        }
      }
      addUtilities(newUtilities)
    }
  ],
  // 모바일 전용 유틸리티 클래스만 사용
  corePlugins: {
    container: false, // 컨테이너 제거 (모바일에서는 불필요)
  },
}
