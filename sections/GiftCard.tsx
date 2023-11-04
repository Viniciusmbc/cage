import { FunctionComponent } from "preact";

export interface GiftCardPageProps {
  selectedPhrase: string;
  giftCardValue: number;
  onPhraseChange: (event: Event) => void;
  onValueChange: (event: Event) => void;
  phraseList: string[]; // Add phraseList prop
}

const GiftCardPage: FunctionComponent<GiftCardPageProps> = ({
  selectedPhrase,
  giftCardValue,
  phraseList = [
    "O real não está na saída nem na chegada: ele se dispõe para a gente é no meio da travessia. (Grande Sertão Veredas)",
    "A verdadeira beleza está na descoberta, não na previsão. (Aldous Huxley)",
    "Don’t panic (Guia do Mochileiro das Galáxias)",
    "Você deve ter sua toalha com você. A toalha é um dos objetos mais úteis para um mochileiro interestelar. (Guia do Mochileiro das Galáxias)",
    "Quando se sonha sozinho, é apenas um sonho. Quando se sonha junto, é o começo da realidade. (Dom Quixote)",
    "Quem lê muito e anda muito, vê muito e sabe muito. (Dom Quixote)",
    "Mundo, mundo vasto mundo, mais vasto é o meu coração (Carlos Drummond de Andrade)",
    "Tenho apenas duas mãos e o sentimento do mundo. (Carlos Drummond de Andrade)",
    "How you doin'? (Joey Tribbiani)",
    "Bem-vindo ao mundo real! É horrível. Você vai adorar! (Monica Geller)",
    "It's gonna be legen—wait for it—dary! (Barney Stinson)",
    "Eu teria roubado para você uma orquestra inteira. (Ted Mosby)",
    "É preciso ter caos e frenesi para dar à luz uma estrela dançante. (Friedrich Nietzsche)",
    "Nunca confie em alguém que só bebeu champanhe uma vez na vida. (F. Scott Fitzgerald)",
    "Eu me declaro culpado de ser incrível. (Barney Stinson)",
    "May the Force be with you. (Star Wars)",
    "Cultive seu jardim sombrio com um sorriso misterioso. (Adam’s Family)",
    "Meu coração pode ser frio, mas minhas piadas são afiadas. (Adam’s Family)",
    "Quem tem alma, não tem calma. (Fernando Pessoa)",
    "Já que eu sou, o jeito é ser. (A Hora da Estrela)",
    "C'est n'est pas un gift card",
    "É junto dos bão que a gente fica mió. (Guimarães Rosa)",
    "Ano passado eu morri, mas esse ano eu não morro. (Belchior)",
    "Eu quero partilhar a vida boa com você. (Rubel)",
    "Pelos caminhos que ando, um dia vai ser, só não sei quando. (Leminski)",
    "Você está muito sensata, acho bom você consultar um psicopata. (Leminski)",
    "É aí que você sabe que encontrou alguém especial. Quando pode apenas calar a boca e confortavelmente apreciar o silêncio. (Mia Wallace)",
    "Ao infinito e além! (Buzz Lightyear)",
  ],
  onPhraseChange,
  onValueChange,
}) => {
  return (
    <div className="flex p-10 h-full">
      {/* Left Side: Gift Card */}
      <div className="flex-1 bg-gray-200 p-10 rounded-lg h-screen">
        <h2 className="text-xl font-bold mb-4">Cartao Presente</h2>
        <div className="bg-white p-8 h-4/5 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Mensagem:</h3>
          <p className="text-lg mb-4">{selectedPhrase}</p>
          <h3 className="text-lg font-semibold mb-4">Codigo:</h3>
          <p className="text-lg mb-4">123456789</p>
          <h3 className="text-lg font-semibold mb-4">Validade:</h3>
          <p className="text-lg mb-4">31/12/2021</p>

          <h3 className="text-lg font-semibold">Valor: ${giftCardValue}</h3>
        </div>
      </div>

      {/* Right Side: Selection */}
      <div className="flex-1 ml-10">
        <h2 className="text-xl font-bold mb-4 text-center">
          Customize do seu jeito
        </h2>
        <h3 className="text-lg font-semibold mb-4">Mensagem:</h3>
        <select
          value={selectedPhrase}
          onChange={onPhraseChange}
          className="w-full p-2 mb-4 rounded-lg border-gray-300 border"
        >
          <option value="">Selecione uma de nossas frases!</option>
          {phraseList.map((phrase) => (
            <option value={phrase}>{phrase}</option>
          ))}
        </select>
        <input
          type="number"
          value={giftCardValue}
          onChange={onValueChange}
          className="w-full p-2 rounded-lg border-gray-300 border"
          placeholder="Valor do cartao"
        />
      </div>
    </div>
  );
};

export default GiftCardPage;
