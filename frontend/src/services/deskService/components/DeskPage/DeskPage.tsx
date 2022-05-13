import { FC } from "react";
import { Layout } from "../../../../shared/components/Layout";
import { Title } from "../../../../shared/components/Title";
import { ColumnContainer } from "../../columnService/columnService.container";
import { DeleteDeskContainer } from "../../../deleteDeskService/deleteDeskService.container";
import { DeskPageProps } from "../../deskService.types";
import { ColumnsWrapper, Desk, Wrap } from "./DeskPage.styled";
import { Loader } from "../../../../shared/components/Loader";

export const DeskPage: FC<DeskPageProps> = ({ desk, loading }) => {
  return (
    <Layout>
      <Wrap>
        {loading && <Loader />}
        {!loading && (
          <Desk>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Title>{desk?.name}</Title>
              <DeleteDeskContainer />
            </div>
            <ColumnsWrapper>
              {desk?.columns.map((column, index) => (
                <ColumnContainer column={column} key={index} />
              ))}
            </ColumnsWrapper>
          </Desk>
        )}
      </Wrap>
    </Layout>
  );
};
