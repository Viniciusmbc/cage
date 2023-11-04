import type { HTMLWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} */
export interface Paragraph {
  title: string;
  text: HTMLWidget;
  creditValue?: number;
  numFriends?: number;
}

export interface Props {
  title?: string;
  /** @format textarea */
  items?: Array<Paragraph>;
}
export default function ParagraphList({
  title = "Black Friday Bonanza",
  items = [
    {
      title: "Black Friday Bonanza: Presenteie e Multiplique suas Recompensas!",
      text: "Diga adeus ao dilema de escolher o presente perfeito de amigo secreto!<br> Com a nossa promoção 'Black Friday Bonanza', é simples: você adquire um Gift Card de R$100 por apenas R$90 e começa uma corrente de alegria.</p><b>Cada vez que seu Gift Card for usado, você ganha R$5 em crédito na nossa loja. E não para por aí - se seu amigo continuar a corrente e presentear alguém, cada uso subsequente do cartão na sua rede te dá mais R$5.</b><br>Conquiste uma rede de 10 amigos e surpreenda-se com um presente extra da nossa loja!</b><br> Com a 'Black Friday Bonanza', você presenteia, economiza e acumula prêmios!",
      creditValue: 5,
      numFriends: 10,
    },
    // ...rest of the items
  ],
}: Props) {
  return (
    <div class="lg:container mx-8 md:mx-16 lg:mx-auto mb-8 lg:mb-20 pt-8 lg:border-t flex flex-col  gap-10 text-center text-2xl">
      <h2 class="flex-none lg:w-56 font-bold pb-2 border-b lg:border-none">
        {title}
      </h2>
      <div class="flex-auto flex flex-col gap-8">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              class="flex flex-col  md:pb-8 lg:border-b gap-2 md:gap-4 lg:gap-16"
            >
              <h3 class="flex-none font-bold ">{item.title}</h3>
              <div
                class="flex-auto"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></div>
              <div class="hidden xl:block flex-none w-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
