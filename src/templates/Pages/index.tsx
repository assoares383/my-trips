import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import LinkWrapper from "components/LinkWrapper";

import * as S from "./styles";

const AboutTemplate = () => (
    <S.Content>
        <LinkWrapper href="/">
            <CloseOutline size={32} />
        </LinkWrapper>

        <S.Heading>My Trips</S.Heading>

        <S.Body>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec vehicula nulla. Praesent massa purus, scelerisque a tellus
                nec, venenatis malesuada ex. Aliquam pulvinar dui turpis,
                placerat ullamcorper diam mollis vitae. Cras tempus tristique
                dolor et faucibus. Duis in gravida quam.
            </p>
        </S.Body>
    </S.Content>
);

export default AboutTemplate;
