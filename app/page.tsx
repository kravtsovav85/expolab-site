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

export default function Home() {
  return (
    <main>
      <header className="site-header"><Logo /><nav aria-label="Основная навигация"><Link href="/products">Продукты</Link><Link href="/economics">Экономика</Link><Link href="/markets">Рынки</Link><Link href="/about">О компании</Link></nav><Link href="/contact" className="header-cta">Обсудить подключение</Link></header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">Готовая экспортная инфраструктура</p><h1>Ваш бренд.<br /><span>Наш контур.<br />Новый рынок.</span></h1><p className="lead">Запускайте продажи через наши юрлица и локальную команду — без затрат на создание собственной инфраструктуры.</p><div className="hero-actions"><Link href="/contact" className="primary">Рассчитать подключение</Link><Link href="/process" className="text-link">Как это работает <span>→</span></Link></div></div>
        <div className="hero-lab" aria-label="Схема готовой экспортной инфраструктуры"><div className="dish"><Mark /><span className="dish-note dish-note-a">юрлицо</span><span className="dish-note dish-note-b">канал продаж</span><span className="dish-note dish-note-c">локальные операции</span></div><p>Не набор консультаций, а работающий контур, к которому можно подключить товар.</p></div>
      </section>
      <section className="infrastructure">
        <div className="infrastructure-heading"><p className="eyebrow">Экономика подключения</p><h2>Не строить с нуля.<br /><span>Использовать готовое.</span></h2></div>
        <div className="comparison">
          <article className="comparison-own"><p className="comparison-label">Своя инфраструктура</p><h3>≈ 500–800 тыс. ₽<small>в месяц</small></h3><p className="comparison-result">Ориентир постоянных расходов на команду, учёт и операции. Создание структуры — отдельно.</p></article>
          <article className="comparison-expolab"><p className="comparison-label">Оператор ExpoLab · KZ / UZ</p><h3>100 тыс. ₽<small>в месяц за один рынок</small></h3><p className="comparison-result">Тариф за работу через действующее юрлицо и администрирование продаж.</p></article>
        </div>
        <div className="cost-note"><Link href="/economics">Из чего складывается бюджет →</Link><p>Это не полная стоимость выхода: товар, логистика, комиссии, налоги и продвижение считаются отдельно. 500–800 тыс. ₽ — оценка, зависящая от масштаба и страны.</p></div>
      </section>
      <section className="explore"><div className="section-heading"><h2>Детали — когда нужны.</h2></div><div className="explore-grid"><Link href="/products"><small>01 / Форматы работы</small><h3>Продукты и тарифы <span>↗</span></h3><p>От подключения к площадке до внешнего директора по экспорту.</p></Link><Link href="/markets"><small>02 / География</small><h3>Три рынка <span>↗</span></h3><p>Казахстан · Узбекистан · Беларусь. У каждого — своя модель.</p></Link><Link href="/process"><small>03 / Подключение</small><h3>От товара до продаж <span>↗</span></h3><p>Что готовим мы, что нужно от вас и как начинается работа.</p></Link></div></section>
      <footer><Logo /><Link href="/about" className="text-link">О компании</Link><div className="footer-links"><Link href="/privacy">Политика конфиденциальности</Link><Link href="/legal">Реквизиты</Link><span>© 2026 ExpoLab</span></div></footer>
    </main>
  );
}
