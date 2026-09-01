import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExpoLab — экспортная лаборатория',
  description: 'Проверяем экономику выхода товарного бренда на новый рынок до масштабных вложений.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'ExpoLab — экспортная лаборатория',
    description: 'Сначала экономика. Потом экспорт.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpoLab — экспортная лаборатория',
    description: 'Сначала экономика. Потом экспорт.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
