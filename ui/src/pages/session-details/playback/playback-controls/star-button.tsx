import { useStarCapture } from 'data-services/hooks/captures/useStarCapture'
import { CaptureDetails } from 'data-services/models/capture-details'
import {
  IconButton,
  IconButtonTheme,
} from 'design-system/components/icon-button/icon-button'
import { IconType } from 'design-system/components/icon/icon'
import { Tooltip } from 'design-system/components/tooltip/tooltip'
import { STRING, translate } from 'utils/language'

export const StarButton = ({
  capture,
  captureFetching,
  captureId,
}: {
  capture?: CaptureDetails
  captureFetching?: boolean
  captureId: string
}) => {
  const isStarred = capture?.isStarred ?? false
  const { starCapture, isLoading } = useStarCapture(captureId, isStarred)

  const tooltipContent = capture?.canUpdate
    ? isStarred
      ? translate(STRING.STARRED)
      : translate(STRING.STAR)
    : translate(STRING.MESSAGE_PERMISSIONS_MISSING)

  return (
    <Tooltip content={tooltipContent}>
      <IconButton
        icon={isStarred ? IconType.HeartFilled : IconType.Heart}
        disabled={!capture?.canUpdate}
        loading={isLoading || captureFetching}
        theme={IconButtonTheme.Neutral}
        onClick={() => starCapture()}
      />
    </Tooltip>
  )
}
