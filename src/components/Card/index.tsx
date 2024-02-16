import { useLayoutEffect, useRef, useState } from "react";
import { ChatCentered, Heart } from "phosphor-react";

import { Flex } from "@/components";

import * as S from "./styles";

type CardProps = {
  imageUrl: string;
  likes?: number;
  comments?: number;
};

const Card = ({ imageUrl, likes = 0, comments = 0 }: CardProps) => {
  const [height, setHeight] = useState(366);
  const itemRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const getGridWidth = () => {
      if (itemRef.current) {
        const gridColumnWidth = itemRef.current.offsetWidth;
        setHeight(gridColumnWidth);
      }
    };

    getGridWidth();
    window.addEventListener("resize", getGridWidth);

    return () => window.removeEventListener("resize", getGridWidth);
  }, []);

  return (
    <S.Item ref={itemRef} height={height}>
      <S.ItemImage src={imageUrl} />
      <S.Overlay>
        <Flex gap="1rem">
          <Flex gap="0.4rem">
            <Heart size={18} weight="bold" /> {likes}
          </Flex>

          <Flex gap="0.4rem">
            <ChatCentered size={18} weight="bold" /> {comments}
          </Flex>
        </Flex>
      </S.Overlay>
    </S.Item>
  );
};

export default Card;
