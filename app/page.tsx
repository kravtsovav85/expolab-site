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
  ['01', 'Товар', 'Отбираем SKU, которые выдерживают экономику выбранного рынка.'],
  ['02', 'Модель', 'Считаем цену, комиссии, логистику и операционные расходы.'],
  ['03', 'Подключение', 'Заводим бренд в готовый юридический и коммерческий контур.'],
  ['04', 'Продажи', 'Запускаем канал и ведём локальные операции.'],
  ['05', 'Масштаб', 'Расширяем модель только после появления фактических данных.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header"><Logo /><nav aria-label="Основная навигация"><Link href="/products">Продукты</Link><Link href="/markets">Рынки</Link><Link href="/process">Как подключаем</Link><Link href="/about">О компании</Link></nav><Link href="/contact" className="header-cta">Обсудить подключение</Link></header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">Готовая экспортная инфраструктура</p><h1>Новые рынки.<br /><span>Без своей инфраструктуры.</span></h1><p className="lead">Подключаем ваш бренд к действующему юридическому, коммерческому и операционному контуру в Казахстане, Узбекистане и Беларуси.</p><div className="hero-actions"><Link href="/contact" className="primary">Рассчитать подключение</Link><Link href="/process" className="text-link">Что уже готово <span>→</span></Link></div></div>
        <div className="hero-lab" aria-label="Схема готовой экспортной инфраструктуры"><div className="dish"><Mark /><span className="dish-note dish-note-a">юрлицо</span><span className="dish-note dish-note-b">канал продаж</span><span className="dish-note dish-note-c">локальные операции</span></div><p>Не набор консультаций, а работающий контур, к которому можно подключить товар.</p></div>
      </section>
      <section className="infrastructure">
        <div className="infrastructure-heading"><p className="eyebrow">Две модели выхода</p><h2>Инфраструктура нужна.<br /><span>Владеть ею с первого дня — нет.</span></h2></div>
        <div className="comparison">
          <article className="comparison-own"><p className="comparison-label">Строить самостоятельно</p><h3>Сначала расходы.<br />Потом рынок.</h3><ul><li>открыть юрлицо и банковский контур</li><li>заключить договоры с площадками</li><li>собрать локальную команду и учёт</li><li>организовать склад и ежедневные операции</li></ul><p className="comparison-result">Капитальные вложения и месяцы подготовки до первой продажи.</p></article>
          <article className="comparison-expolab"><p className="comparison-label">Подключиться к ExpoLab</p><h3>Сначала рынок.<br />Своя инфраструктура — когда нужна.</h3><ul><li>действующее юридическое лицо</li><li>подключённые каналы продаж</li><li>локальная операционная команда</li><li>управление запуском и продажами</li></ul><p className="comparison-result">Без капитальных затрат на создание контура. Базовая операторская модель — от 100 000 ₽ в месяц.</p></article>
        </div>
        <div className="cost-note"><span>Для сравнения</span><p>Открытие собственного юрлица — 100 000 ₽ за проект плюс обязательные расходы. После этого всё равно понадобятся команда, учёт, договоры и операции.</p></div>
      </section>
      <section className="protocol"><div className="section-heading"><p className="eyebrow">Как подключаем бренд</p><Link href="/process" className="text-link">Подробный процесс <span>→</span></Link></div><div className="steps">{steps.map(([n, title, text]) => <article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="markets"><div><p className="eyebrow">Первый контур</p><h2>Три рынка для проверяемого старта.</h2></div><div className="market-links"><Link href="/markets#kazakhstan"><span>Казахстан</span><small>Kaspi.kz</small><b>→</b></Link><Link href="/markets#uzbekistan"><span>Узбекистан</span><small>Uzum Market</small><b>→</b></Link><Link href="/markets#belarus"><span>Беларусь</span><small>21vek.by</small><b>→</b></Link></div></section>
      <section className="final-cta"><div className="final-mark"><Mark /></div><div><p className="eyebrow">Есть товар и новый рынок?</p><h2>Посчитаем модель без капитальных затрат.</h2></div><Link href="/contact" className="primary inverse">Обсудить подключение</Link></section>
      <footer><Logo /><p>Готовая экспортная инфраструктура для товарных брендов.</p><span>© 2026 ExpoLab</span></footer>
    </main>
  );
}
