import { FormField } from 'components/form/form-field'
import {
  FormActions,
  FormError,
  FormRow,
  FormSection,
} from 'components/form/layout/layout'
import { FormConfig } from 'components/form/types'
import { StorageSource } from 'data-services/models/storage'
import { Button, ButtonTheme } from 'design-system/components/button/button'
import { IconType } from 'design-system/components/icon/icon'
import { useForm } from 'react-hook-form'
import { STRING, translate } from 'utils/language'
import { useFormError } from 'utils/useFormError'
import { DetailsFormProps, FormValues } from './types'

type StorageFormValues = FormValues & {
  bucket: string
  public_base_url: string | undefined
  endpoint_url: string | undefined
  access_key: string | undefined
  secret_key: string | undefined
}

const config: FormConfig = {
  name: {
    label: translate(STRING.FIELD_LABEL_NAME),
    description: 'A descriptive name for internal reference.',
    rules: {
      required: true,
    },
  },
  bucket: {
    label: 'Bucket / Container Name',
    description: 'The root location within the storage service.',
    rules: {
      required: true,
    },
  },
  endpoint_url: {
    label: 'Endpoint URL',
    description:
      "Custom storage service endpoint. If not provided, the endpoint for Amazon's S3 service will be used.",
  },
  public_base_url: {
    label: 'Public Base URL',
    description:
      'Base URL for public access to files. If not provided, temporary private URLs will be generated on-demand.',
  },
  access_key: {
    label: 'Access Key ID',
    description: 'Access key ID for the S3 object storage service.',
  },
  secret_key: {
    label: 'Secret Access Key',
    description: 'Secret access key for the S3 object storage service.',
  },
}

export const StorageDetailsForm = ({
  entity,
  error,
  isLoading,
  isSuccess,
  onSubmit,
}: DetailsFormProps) => {
  const storage = entity as StorageSource | undefined
  const {
    control,
    handleSubmit,
    setError: setFieldError,
  } = useForm<StorageFormValues>({
    defaultValues: {
      name: entity?.name,
      bucket: storage?.bucket,
      public_base_url: storage?.publicBaseUrl,
      endpoint_url: storage?.endpointUrl,
      // access key and secret key are not returned by the API
    },
    mode: 'onChange',
  })

  const errorMessage = useFormError({ error, setFieldError })

  return (
    <form
      onSubmit={handleSubmit((values) =>
        onSubmit({
          name: values.name,
          description: values.description,
          customFields: {
            bucket: values.bucket,
            public_base_url: values.public_base_url,
            endpoint_url: values.endpoint_url,
            access_key: values.access_key,
            secret_key: values.secret_key,
          },
        })
      )}
    >
      {errorMessage && (
        <FormError
          inDialog
          intro={translate(STRING.MESSAGE_COULD_NOT_SAVE)}
          message={errorMessage}
        />
      )}
      <FormSection>
        <FormRow>
          <FormField
            name="name"
            type="text"
            config={config}
            control={control}
          />
          <FormField
            name="bucket"
            type="text"
            config={config}
            control={control}
          />
        </FormRow>
        <FormRow>
          <FormField
            name="endpoint_url"
            type="text"
            config={config}
            control={control}
          />
          <FormField
            name="public_base_url"
            type="text"
            config={config}
            control={control}
          />
        </FormRow>
        <FormRow>
          <FormField
            name="access_key"
            type="password"
            config={config}
            control={control}
          />
          <FormField
            name="secret_key"
            type="password"
            config={config}
            control={control}
          />
        </FormRow>
      </FormSection>
      <FormActions>
        <Button
          label={isSuccess ? translate(STRING.SAVED) : translate(STRING.SAVE)}
          icon={isSuccess ? IconType.RadixCheck : undefined}
          type="submit"
          theme={ButtonTheme.Success}
          loading={isLoading}
        />
      </FormActions>
    </form>
  )
}
