// 主题配置文件
export interface ThemeConfig {
  name: string;
  label: string;
  icon: string;
  isDark: boolean;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  border: string;
  input: string;
  ring: string;
}

// 定义多个主题
export const themes: Record<string, ThemeConfig> = {
  // 默认主题 - 蓝色调
  default: {
    name: 'default',
    label: '默认主题',
    icon: '🌐',
    isDark: false,
    primary: '#007bff',
    secondary: '#6c757d',
    accent: '#17a2b8',
    background: '#f8f9fa',
    foreground: '#343a40',
    card: '#ffffff',
    cardForeground: '#343a40',
    border: '#dee2e6',
    input: '#ffffff',
    ring: '#007bff'
  },
  
  // 暗黑主题
  dark: {
    name: 'dark',
    label: '暗黑主题',
    icon: '🌙',
    isDark: true,
    primary: '#00aaff',
    secondary: '#6c757d',
    accent: '#17a2b8',
    background: '#121212',
    foreground: '#e9ecef',
    card: '#1e1e1e',
    cardForeground: '#e9ecef',
    border: '#343a40',
    input: '#343a40',
    ring: '#00aaff'
  },
  
  // 森林主题 - 绿色调
  forest: {
    name: 'forest',
    label: '森林主题',
    icon: '🌲',
    isDark: false,
    primary: '#28a745',
    secondary: '#6c757d',
    accent: '#20c997',
    background: '#f8fff8',
    foreground: '#2c3e50',
    card: '#ffffff',
    cardForeground: '#2c3e50',
    border: '#d4edda',
    input: '#ffffff',
    ring: '#28a745'
  },
  
  // 日落主题 - 橙色调
  sunset: {
    name: 'sunset',
    label: '日落主题',
    icon: '🌅',
    isDark: false,
    primary: '#fd7e14',
    secondary: '#6c757d',
    accent: '#ffc107',
    background: '#fff8f0',
    foreground: '#495057',
    card: '#ffffff',
    cardForeground: '#495057',
    border: '#fff3cd',
    input: '#ffffff',
    ring: '#fd7e14'
  }
};

// 从环境变量获取默认主题，默认为 'default'
export const defaultTheme = import.meta.env.PUBLIC_DEFAULT_THEME || 'default';

// 获取主题配置
export function getThemeConfig(themeName: string): ThemeConfig {
  return themes[themeName] || themes.default;
}

// 获取所有主题
export function getAllThemes(): ThemeConfig[] {
  return Object.values(themes);
}