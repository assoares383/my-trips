import * as S from "./styles";

const Main = () => (
    <S.Wrapper>
        <S.Logo src="/images/logo.svg" alt="Imagem de um atomo" />
        <S.Title>React Avançado</S.Title>
        <S.Description>
            Typescript, ReactJS, NextJS e Styled Components
        </S.Description>
        <S.Illustration
            src="/images/hero-illustration.svg"
            alt="Um desenvolvedor de frente para uma tela com codigo."
        />
    </S.Wrapper>
);

export default Main;
