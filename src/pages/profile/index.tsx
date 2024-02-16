import { BaseTemplate } from "@/templates";

import { Box, Button, Card, Flex } from "@/components";

import { ROUTES } from "@/utils/common/constant/routes";
import { posts } from "@/utils/common/mocks/posts";

import * as S from "./styles";

const Profile = () => {
  return (
    <BaseTemplate>
      <Box>
        <Flex gap="1.6rem" align="center">
          <S.ImageWrap>
            <S.Image src="https://avatars.githubusercontent.com/u/16245261?v=4" />
          </S.ImageWrap>

          <S.UserInfo>
            <Flex
              direction="column"
              gap="0.4rem"
              style={{
                flexGrow: 1
              }}
            >
              <Flex gap="1rem">
                <Flex gap="0.4rem">
                  <span>93</span>
                  <span>publicações</span>
                </Flex>

                <Flex gap="0.4rem">
                  <span>210</span>
                  <span>curtidas</span>
                </Flex>
              </Flex>

              <h1>Daniel Silva</h1>
              <p>
                Sênior Frontend Developer e desenvolver se tornou um hobby
                favorito. Atualmente pratico esse hobby filosofando sobre meus
                códigos com uma cerveja (🍺).
              </p>
              <Button as="a" href={ROUTES.PROFILE.EDIT} size="small" minimal>
                Editar perfil
              </Button>
            </Flex>
          </S.UserInfo>
        </Flex>
      </Box>

      <S.GridWrap>
        {posts.map((post) => (
          <Card
            key={post._id}
            imageUrl={post.image}
            likes={post.likes.length}
            comments={post.comments.length}
          />
        ))}
      </S.GridWrap>
    </BaseTemplate>
  );
};

export default Profile;
