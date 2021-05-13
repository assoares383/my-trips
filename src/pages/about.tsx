import client from "graphql/client";
import { GET_PAGES } from "graphql/queries";
import { useRouter } from "next/dist/client/router";
import PageTemplate from "templates/Pages";

export default function AboutPage() {
    const router = useRouter();

    // retorna um loading, qualquer coisa enquanto esta sendo criado
    if (router.isFallback) return null;

    return <PageTemplate />;
}

export async function getStaticPaths() {
    const { pages } = await client.request(GET_PAGES, { first: 3 });

    const paths = pages.map(({ slug }) => ({
        params: { slug },
    }));

    return { paths, fallback: true };
}

// export const getStaticProps = async () => {
//     return {
//         props: {},
//     };
// };

// getStaticPaths => serve para gerar as urls em build time /about, /trip/montreal
// getStaticProps => serve para buscar dados da pagina (props) - build time - estatico
// getServerSideProps => serve para buscar dados da pagina (props) - runtime - toda requisicao
// (bundle fica no server)
// getInitialProps => serve para busca dados da pagina (props) - runtime - toda requisicao
// (bundle tambem vem para o client)
