import { useFormik } from "formik";
import { FC } from "react";
import { DisplayTaskFormProps, IPatchTask } from "./DisplayTaskForm.types";
import * as Yup from "yup";
import { Form, Input } from "antd";
import { Wrapper } from "./DisplayTaskForm.styled";

const PatchTaskSchema = Yup.object().shape({
  title: Yup.string().max(30).required("Title is required"),
  description: Yup.string(),
  preview: Yup.string(),
});

export const DisplayTaskForm: FC<DisplayTaskFormProps> = ({
  task,
  handleSubmit,
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
        />
      </Form.Item>
    </Wrapper>
  );
};
