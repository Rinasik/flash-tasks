import { useFormik } from "formik";
import { FC } from "react";
import { DisplayTaskFormProps, IPatchTask } from "./DisplayTaskForm.types";
import * as Yup from "yup";
import { Form, Input } from "antd";
import { ButtonWrapper, Wrapper } from "./DisplayTaskForm.styled";
import { Button } from "../../../../../../../../shared/components/Button";

const PatchTaskSchema = Yup.object().shape({
  title: Yup.string().max(30).required("Title is required"),
  description: Yup.string(),
  preview: Yup.string(),
});

export const DisplayTaskForm: FC<DisplayTaskFormProps> = ({
  task,
  handleSubmit,
  handleDeleteTask,
}) => {
  const { values, setFieldValue, handleChange, errors, submitForm } =
    useFormik<IPatchTask>({
      initialValues: {
        title: task.title,
        description: task.description,
        preview: task.preview,
      },
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: PatchTaskSchema,
      onSubmit: handleSubmit,
    });

  return (
    <Wrapper>
      <Form.Item label="Title of task">
        <Input
          value={values.title}
          name="title"
          onChange={handleChange}
          placeholder="Title"
          status={errors.title && "error"}
          style={{ width: "80%" }}
        />
      </Form.Item>
      <Form.Item label="Description of task">
        <Input
          value={values.description}
          name="description"
          onChange={handleChange}
          placeholder="Description"
          status={errors.title && "error"}
          style={{ width: "80%" }}
        />
      </Form.Item>
      <ButtonWrapper>
        <Button
          outlined
          size="sm"
          style={{ color: "var(--main-color)" }}
          onClick={() => {
            handleDeleteTask(task._id);
          }}
        >
          Delete task
        </Button>

        <Button size="sm" onClick={submitForm} style={{ marginLeft: "18px" }}>
          Save
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
