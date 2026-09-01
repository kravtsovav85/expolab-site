import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExpoLab — экспортная лаборатория',
  description: 'Готовая экспортная инфраструктура для выхода товарных брендов на рынки Казахстана, Узбекистана и Беларуси.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'ExpoLab — экспортная лаборатория',
    description: 'Выход на новые рынки без капитальных затрат на собственное юрлицо, склад и локальную команду.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpoLab — экспортная лаборатория',
    description: 'Выход на новые рынки без капитальных затрат на собственное юрлицо, склад и локальную команду.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
