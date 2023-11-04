export interface Props {
  promoName: string;
  numFriends: number;
  creditValue?: number;
}

function BlackFridayPromo({
  promoName = "Bonanza",
  numFriends = 10,
  creditValue = 5,
}: Props) {
  return (
    <div className="bg-black text-white p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        Black Friday {promoName}: Presenteie e Multiplique suas Recompensas!
      </h1>
      <p className="mb-4">
        Diga adeus ao dilema de escolher o presente perfeito de amigo secreto!
        Com a nossa promoção 'Black Friday {promoName}', é simples: você adquire
        um Gift Card de R$100 por apenas R$90 e começa uma corrente de alegria.
      </p>
      <p className="mb-4">
        Cada vez que seu Gift Card for usado, você ganha R${creditValue} em
        crédito na nossa loja. E não para por aí - se seu amigo continuar a
        corrente e presentear alguém, cada uso subsequente do cartão na sua rede
        te dá mais R${creditValue}.
      </p>
      <p>
        Conquiste uma rede de {numFriends} amigos e surpreenda-se com um
        presente extra da nossa loja! Com a 'Black Friday {promoName}', você
        presenteia, economiza e acumula prêmios!
      </p>
    </div>
  );
}

export default BlackFridayPromo;
