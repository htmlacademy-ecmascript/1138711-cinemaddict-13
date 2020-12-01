export const createFooterStatistics = (card) => {
  const {films} = card;

  return ` <section class="footer__statistics">
        <p>${films} movies inside</p>
    </section>`;
};
