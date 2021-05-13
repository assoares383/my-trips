import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import LinkWrapper from "components/LinkWrapper";

import * as S from "./styles";

export type PageTemplatesProps = {
    heading: string;
    body: string;
};

const AboutTemplate = ({ heading, body }: PageTemplatesProps) => (
    <S.Content>
        <LinkWrapper href="/">
            <CloseOutline size={32} />
        </LinkWrapper>

        <S.Heading>{heading}</S.Heading>

        <S.Body>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>
    </S.Content>
);

export default AboutTemplate;
