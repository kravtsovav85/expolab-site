import Link from 'next/link';

function Mark({ mini = false }: { mini?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth={mini ? 6 : 4.5} />
      {mini ? <circle cx="42" cy="40" r="16" fill="#53427E" /> : <ellipse cx="40" cy="38" rx="15" ry="13.1" transform="rotate(-16 40 38)" fill="#53427E" />}
      {!mini && <ellipse cx="63" cy="33" rx="6.6" ry="6.4" transform="rotate(28 63 33)" fill="currentColor" />}
      {mini ? <circle cx="54" cy="66" r="12" stroke="currentColor" strokeWidth="5.5" /> : <ellipse cx="54" cy="67" rx="10.9" ry="11.1" transform="rotate(-8 54 67)" stroke="currentColor" strokeWidth="4" />}
    </svg>
  );
}

function Logo() {
  return <Link href="/" className="brand" aria-label="ExpoLab, главная"><span>exp</span><span className="brand-mark"><Mark /></span><span>lab</span></Link>;
}

const steps = [
  ['01', 'Образец', 'Отбираем SKU и фиксируем исходные данные.'],
  ['02', 'Экономика', 'Считаем цену, комиссию, логистику и допустимый CAC.'],
  ['03', 'Среда', 'Подключаем рынок и канал без собственной инфраструктуры.'],
  ['04', 'Эксперимент', 'Запускаем ограниченную партию и собираем факты.'],
  ['05', 'Решение', 'Остановить, изменить модель или масштабировать.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header"><Logo /><nav aria-label="Основная навигация"><Link href="/products">Продукты</Link><Link href="/markets">Рынки</Link><Link href="/process">Метод</Link><Link href="/about">О лаборатории</Link></nav><Link href="/contact" className="header-cta">Проверить гипотезу</Link></header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">Экспортная лаборатория</p><h1>Сначала экономика.<br /><span>Потом экспорт.</span></h1><p className="lead">Проверяем, может ли ваш товар зарабатывать на новом рынке — до вложений в собственную команду, склад и юридическую инфраструктуру.</p><div className="hero-actions"><Link href="/contact" className="primary">Рассчитать эксперимент</Link><Link href="/process" className="text-link">Как устроена проверка <span>→</span></Link></div></div>
        <div className="hero-lab" aria-label="Схема экспортного эксперимента"><div className="dish"><Mark /><span className="dish-note dish-note-a">товар</span><span className="dish-note dish-note-b">рынок</span><span className="dish-note dish-note-c">рабочая модель</span></div><p>Один контролируемый эксперимент вместо большой ставки вслепую.</p></div>
      </section>
      <section className="thesis"><p className="eyebrow">Принцип</p><h2>Не обещаем рост.<br />Ставим эксперимент.</h2><p>Формулируем гипотезу, считаем unit-экономику, запускаем тестовую партию и принимаем решение по фактическим данным.</p></section>
      <section className="protocol"><div className="section-heading"><p className="eyebrow">Протокол запуска</p><Link href="/process" className="text-link">Подробный метод <span>→</span></Link></div><div className="steps">{steps.map(([n, title, text]) => <article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="markets"><div><p className="eyebrow">Первый контур</p><h2>Три рынка для проверяемого старта.</h2></div><div className="market-links"><Link href="/markets#kazakhstan"><span>Казахстан</span><small>Kaspi.kz</small><b>→</b></Link><Link href="/markets#uzbekistan"><span>Узбекистан</span><small>Uzum Market</small><b>→</b></Link><Link href="/markets#belarus"><span>Беларусь</span><small>21vek.by</small><b>→</b></Link></div></section>
      <section className="final-cta"><div className="final-mark"><Mark /></div><div><p className="eyebrow">Есть товар и гипотеза?</p><h2>Посчитаем первый сценарий выхода.</h2></div><Link href="/contact" className="primary inverse">Обсудить эксперимент</Link></section>
      <footer><Logo /><p>Экспортные эксперименты для товарных брендов.</p><span>© 2026 ExpoLab</span></footer>
    </main>
  );
}
