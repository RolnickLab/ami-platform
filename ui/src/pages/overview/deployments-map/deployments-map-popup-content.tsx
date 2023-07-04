import { Deployment } from 'data-services/models/deployment'
import { Link } from 'react-router-dom'
import { STRING, translate } from 'utils/language'

export const DeploymentsMapPopupContent = ({
  deployment,
}: {
  deployment: Deployment
}) => (
  <>
    <p>
      <Link to={`/deployments/${deployment.id}`}>
        <span>{deployment.name}</span>
      </Link>
    </p>
    <p>
      <span>
        {translate(STRING.DETAILS_LABEL_SESSIONS)}: {deployment.numEvents}
      </span>
      <br />
      <span>
        {translate(STRING.DETAILS_LABEL_IMAGES)}: {deployment.numImages}
      </span>
      <br />
      <span>
        {translate(STRING.DETAILS_LABEL_DETECTIONS)}: {deployment.numDetections}
      </span>
    </p>
  </>
)