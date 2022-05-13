import { FC } from "react";
import { Link } from "react-router-dom";
import { DeskWrapper, TitleOfDesk } from "./DesksList.styled";
import { DesksListProps } from "./DesksList.types";

export const DesksList: FC<DesksListProps> = ({ desksList }) => {
  return (
    <>
      {desksList?.items.map((item, index) => (
        <Link to={`/Desk/${item._id}`} key={index}>
          <DeskWrapper>
            <TitleOfDesk> {item.name}</TitleOfDesk>
          </DeskWrapper>
        </Link>
      ))}
    </>
  );
};
