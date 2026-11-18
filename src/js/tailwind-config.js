/* ==========================================================================
   TAILWIND CONFIGURATION — HERBS & SPICES
   Loaded immediately after the Tailwind Play CDN script.
   Warm color theme: FBBA72, E38741, CA5310, 8F250C, 691E06
   Preflight is intentionally DISABLED so the artisanal stylesheet in
   src/css/style.css is never reset — Tailwind is used only for
   supplemental layout/spacing utilities on top of the original design.
   ========================================================================== */
window.tailwind.config = {
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FDF8F2',
          100: '#FAF3EA',
          200: '#FBBA72',
          300: '#E38741',
          400: '#CA5310',
          500: '#8F250C',
          600: '#691E06',
          700: '#461203',
          800: '#2C0B02',
          900: '#1A0701'
        },
        navy: {
          DEFAULT: '#691E06',
          dark: '#461203',
          light: '#8F250C'
        },
        primary: {
          DEFAULT: '#691E06',
          dark: '#461203',
          light: '#8F250C'
        },
        ivory: {
          bg: '#FAF3EA',
          surface: '#FFF8F0',
          card: '#FFFFFF'
        },
        gold: {
          DEFAULT: '#FBBA72',
          hover: '#E38741'
        },
        spice: {
          amber: '#FBBA72',
          orange: '#E38741',
          rust: '#CA5310',
          crimson: '#8F250C',
          roast: '#691E06',
          turmeric: '#E38741',
          chilli: '#8F250C',
          terracotta: '#CA5310',
          sage: '#4E684D',
          pepper: '#261108'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    }
  }
};
