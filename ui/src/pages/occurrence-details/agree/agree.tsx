import { useCreateIdentification } from 'data-services/hooks/identifications/useCreateIdentification'
import { Button, ButtonTheme } from 'design-system/components/button/button'
import { IconType } from 'design-system/components/icon/icon'
import { useEffect } from 'react'

interface AgreeProps {
  agreed?: boolean
  buttonTheme?: ButtonTheme
  occurrenceId: string
  taxonId: string
}

export const Agree = ({
  agreed,
  buttonTheme,
  occurrenceId,
  taxonId,
}: AgreeProps) => {
  const { createIdentification, isLoading, isSuccess, reset } =
    useCreateIdentification()

  useEffect(() => {
    reset()
  }, [agreed])

  if (isSuccess || agreed) {
    return (
      <Button label="Agreed" icon={IconType.RadixCheck} theme={buttonTheme} />
    )
  }

  return (
    <Button
      label="Agree"
      loading={isLoading}
      theme={buttonTheme}
      onClick={() => createIdentification({ occurrenceId, taxonId })}
    />
  )
}
