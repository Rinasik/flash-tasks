import { FC } from "react";
import { ColumnProps } from "../../columnService.types";
import { NameWrapper, Wrap } from "./Column.styled";

export const Column: FC<ColumnProps> = ({color, name}) => {
  return <Wrap color={color}>
    <NameWrapper>
    {name}
    </NameWrapper>
    </Wrap>
};
