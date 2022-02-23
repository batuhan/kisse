import { Form, FormProps } from "app/core/components/Form"
import LabeledNumberField from "app/core/components/LabeledNumberField"
import LabeledTextAreaField from "app/core/components/LabeledTextAreaField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import AssetTypeSelector from "./AssetTypeSelector"
export { FORM_ERROR } from "app/core/components/Form"

export function AssetForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />
      <LabeledTextAreaField name="description" label="description" placeholder="description" />
      <LabeledNumberField name="price" label="Name" placeholder="Name" />
      <LabeledTextField name="name" label="Name" placeholder="Name" />

      <AssetTypeSelector />
    </Form>
  )
}
