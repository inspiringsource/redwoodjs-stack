import {
  FieldError,
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { MetaTags, useMutation } from '@redwoodjs/web'
import '../../index.css'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <p className="pt-48 p-8 py-4 px-6 text-4xl text-center">
        To learn more about our company, or to find information on this site,
        please do not hesitate to contact me.
      </p>
      <Form
        className="flex flex-col items-center justify-center pt-[30px]"
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError error={error} wrapperClassName="form-error" />
        {/* name field */}
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          className="border border-black"
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        {/* email field */}
        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          className="border border-black"
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        {/* message field */}
        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          className="border border-black"
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />
        <br />
        <Submit className="border border-black py-1 px-2" disabled={loading}>
          Send
        </Submit>
      </Form>
    </>
  )
}

export default ContactPage
