type Props = {
  stats: {
    wines: number;
    wineries: number;
    liked: number;
    pending: number;
  };
};

export default function HomePage({ stats }: Props) {
  return (
    <section>
      <div className="hero">
        <h2>Платформа подбора молдавских вин</h2>
        <p>
          Образовательный каталог: сценарии сочетаний, избранное и модерация заявок от местных производителей.
        </p>
      </div>
      <div className="card-grid stats-grid">
        <article className="card stat-card">
          <p className="kicker">Вин в каталоге</p>
          <h3>{stats.wines}</h3>
        </article>
        <article className="card stat-card">
          <p className="kicker">Виноделен</p>
          <h3>{stats.wineries}</h3>
        </article>
        <article className="card stat-card">
          <p className="kicker">В избранном</p>
          <h3>{stats.liked}</h3>
        </article>
        <article className="card stat-card">
          <p className="kicker">Заявок на проверке</p>
          <h3>{stats.pending}</h3>
        </article>
      </div>
    </section>
  );
}
