export const createFooterStatistics = (cardData) => {

  const {date} = cardData;

  return ` <section class="footer__statistics">
        <p>${date} movies inside</p>
    </section>`;
};
