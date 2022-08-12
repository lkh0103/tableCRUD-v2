import React from "react";
import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Title from "../partials/Title";
import Toast from "../partials/Toast";

export default function CreatePage(props: any) {

  const { data, createData } = useCRUD()
  const createUser = (value: any) => {
    createData(value)
  }

  return (
    <div>
      <Title />
      {props.formSchema ? (
        <FormShema propsFormSchema={props.formSchema} />
      ) : (
        <FormCRUD
          title={Object.keys(data[0])}
          createUser={createUser}
        />
      )}
      <Toast
        title={Object.keys(data[0])}
        createUser={createUser}
      />
    </div>
  )
}