export const themePalette = {
  primary: '#0B3D91',
  secondary: '#D4AF37',
  background: '#FFFFFF',
  text: '#1C1C1C',
  textMuted: '#5C5C5C',
} as const;

export type ThemePalette = typeof themePalette;

export function useThemePalette(): ThemePalette {
  return themePalette;
}
