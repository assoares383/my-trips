import client from "graphql/client";
import { GET_PAGES } from "graphql/queries";
import AboutTemplate from "./templates/About";

export default function AboutPage() {
    return <AboutTemplate />;
}

export const getStaticProps = async () => {
    const { pages } = await client.request(GET_PAGES);

    console.log(pages);

    return {
        props: {},
    };
};

// getStaticPaths => serve para gerar as urls em build time /about, /trip/montreal
// getStaticProps => serve para buscar dados da pagina (props) - build time - estatico
// getServerSideProps => serve para buscar dados da pagina (props) - runtime - toda requisicao
// (bundle fica no server)
// getInitialProps => serve para busca dados da pagina (props) - runtime - toda requisicao
// (bundle tambem vem para o client)
