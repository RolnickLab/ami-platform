export enum STRING {
  /* BUTTON */
  BACK,
  CANCEL,
  CURRENT_LOCATION,
  DEQUE_ALL,
  EDIT,
  NEXT,
  QUEUE_ALL,
  RESET,
  SAVE,
  SEARCH_MAP,

  /* DETAILS_LABEL */
  DETAILS_LABEL_APPEARANCE,
  DETAILS_LABEL_AVG_TEMP,
  DETAILS_LABEL_AVG_WEATHER,
  DETAILS_LABEL_CAMERA,
  DETAILS_LABEL_CONNECTION_STATUS,
  DETAILS_LABEL_DATE,
  DETAILS_LABEL_DEPLOYMENT,
  DETAILS_LABEL_DEPLOYMENT_DETAILS,
  DETAILS_LABEL_DEPLOYMENT_ID,
  DETAILS_LABEL_DETECTIONS,
  DETAILS_LABEL_DEVICE,
  DETAILS_LABEL_DURATION,
  DETAILS_LABEL_EDIT_DEPLOYMENT,
  DETAILS_LABEL_ELEVATION,
  DETAILS_LABEL_GENERAL,
  DETAILS_LABEL_IMAGES,
  DETAILS_LABEL_LATITUDE,
  DETAILS_LABEL_LOCATION,
  DETAILS_LABEL_LONGITUDE,
  DETAILS_LABEL_LIGHT_SOURCE,
  DETAILS_LABEL_NAME,
  DETAILS_LABEL_NEW_DEPLOYMENT,
  DETAILS_LABEL_OCCURRENCES,
  DETAILS_LABEL_PATH,
  DETAILS_LABEL_SESSION,
  DETAILS_LABEL_SESSIONS,
  DETAILS_LABEL_SITE,
  DETAILS_LABEL_SOURCE_IMAGES,
  DETAILS_LABEL_TIME,

  /* MESSAGE */
  MESSAGE_VALUE_INVALID,
  MESSAGE_VALUE_MISSING,
  MESSAGE_NO_RESULTS,

  /* NAV_ITEM */
  NAV_ITEM_BATCH_ID,
  NAV_ITEM_DEPLOYMENTS,
  NAV_ITEM_OCCURRENCES,
  NAV_ITEM_OVERVIEW,
  NAV_ITEM_PROJECT,
  NAV_ITEM_SESSIONS,
  NAV_ITEM_SETTINGS,
  NAV_ITEM_SPECIES,

  /* TAB_ITEM */
  TAB_ITEM_CLASSIFICATION,
  TAB_ITEM_FIELDS,
  TAB_ITEM_GALLERY,
  TAB_ITEM_TABLE,

  /* TABLE_COLUMN */
  TABLE_COLUMN_ACTIONS,
  TABLE_COLUMN_APPEARANCE,
  TABLE_COLUMN_AVG_TEMP,
  TABLE_COLUMN_COMPLETE,
  TABLE_COLUMN_DATE,
  TABLE_COLUMN_DEPLOYMENT,
  TABLE_COLUMN_DESCRIPTION,
  TABLE_COLUMN_DETECTIONS,
  TABLE_COLUMN_DURATION,
  TABLE_COLUMN_ID,
  TABLE_COLUMN_IMAGES,
  TABLE_COLUMN_MOST_RECENT,
  TABLE_COLUMN_OCCURRENCES,
  TABLE_COLUMN_QUEUED,
  TABLE_COLUMN_SESSION,
  TABLE_COLUMN_SESSIONS,
  TABLE_COLUMN_SPECIES,
  TABLE_COLUMN_STATUS,
  TABLE_COLUMN_TIME,
  TABLE_COLUMN_UNPROCESSED,

  /* OTHER */
  CLOSE,
  LOADING_DATA,
  RUNNING,
  SCORE,
  SELECT_COLUMNS,
  SELECT_VALUE,
  SESSION,
  SETTINGS,
  STOPPED,
  UPDATING_DATA,
}

const ENGLISH_STRINGS: { [key in STRING]: string } = {
  /* BUTTON */
  [STRING.BACK]: 'Back',
  [STRING.CANCEL]: 'Cancel',
  [STRING.CURRENT_LOCATION]: 'Use current location',
  [STRING.DEQUE_ALL]: 'Deque all',
  [STRING.EDIT]: 'Edit',
  [STRING.NEXT]: 'Next',
  [STRING.QUEUE_ALL]: 'Queue all',
  [STRING.RESET]: 'Reset',
  [STRING.SAVE]: 'Save',
  [STRING.SEARCH_MAP]: 'Search on the map',

  /* DETAILS_LABEL */
  [STRING.DETAILS_LABEL_APPEARANCE]: 'Appearance',
  [STRING.DETAILS_LABEL_AVG_TEMP]: 'Avg temp',
  [STRING.DETAILS_LABEL_AVG_WEATHER]: 'Avg weather',
  [STRING.DETAILS_LABEL_CAMERA]: 'Camera',
  [STRING.DETAILS_LABEL_CONNECTION_STATUS]: 'Connection status',
  [STRING.DETAILS_LABEL_DATE]: 'Date',
  [STRING.DETAILS_LABEL_DEPLOYMENT]: 'Deployment',
  [STRING.DETAILS_LABEL_DEPLOYMENT_DETAILS]: 'Deployment details',
  [STRING.DETAILS_LABEL_DEPLOYMENT_ID]: 'Deployment ID',
  [STRING.DETAILS_LABEL_DETECTIONS]: 'Detections',
  [STRING.DETAILS_LABEL_DEVICE]: 'Device',
  [STRING.DETAILS_LABEL_DURATION]: 'Duration',
  [STRING.DETAILS_LABEL_EDIT_DEPLOYMENT]: 'Edit deployment',
  [STRING.DETAILS_LABEL_ELEVATION]: 'Elevation',
  [STRING.DETAILS_LABEL_GENERAL]: 'General',
  [STRING.DETAILS_LABEL_IMAGES]: 'Images',
  [STRING.DETAILS_LABEL_LATITUDE]: 'Latitude',
  [STRING.DETAILS_LABEL_LOCATION]: 'Location',
  [STRING.DETAILS_LABEL_LONGITUDE]: 'Longitude',
  [STRING.DETAILS_LABEL_LIGHT_SOURCE]: 'Light source',
  [STRING.DETAILS_LABEL_NAME]: 'Name',
  [STRING.DETAILS_LABEL_NEW_DEPLOYMENT]: 'New deployment',
  [STRING.DETAILS_LABEL_OCCURRENCES]: 'Occurrences',
  [STRING.DETAILS_LABEL_PATH]: 'Path',
  [STRING.DETAILS_LABEL_SESSION]: 'Session',
  [STRING.DETAILS_LABEL_SESSIONS]: 'Sessions',
  [STRING.DETAILS_LABEL_SITE]: 'Site',
  [STRING.DETAILS_LABEL_SOURCE_IMAGES]: 'Source images',
  [STRING.DETAILS_LABEL_TIME]: 'Time',

  /* MESSAGE */
  [STRING.MESSAGE_VALUE_INVALID]: 'Please provide a valid value',
  [STRING.MESSAGE_VALUE_MISSING]: 'Please provide a value',
  [STRING.MESSAGE_NO_RESULTS]: 'No results to show',

  /* NAV_ITEM */
  [STRING.NAV_ITEM_BATCH_ID]: 'Batch ID',
  [STRING.NAV_ITEM_DEPLOYMENTS]: 'Deployments',
  [STRING.NAV_ITEM_OCCURRENCES]: 'Occurrences',
  [STRING.NAV_ITEM_OVERVIEW]: 'Overview',
  [STRING.NAV_ITEM_PROJECT]: 'Project',
  [STRING.NAV_ITEM_SESSIONS]: 'Sessions',
  [STRING.NAV_ITEM_SETTINGS]: 'Settings',
  [STRING.NAV_ITEM_SPECIES]: 'Species',

  /* TAB_ITEM */
  [STRING.TAB_ITEM_CLASSIFICATION]: 'Classification',
  [STRING.TAB_ITEM_FIELDS]: 'Fields',
  [STRING.TAB_ITEM_GALLERY]: 'Gallery',
  [STRING.TAB_ITEM_TABLE]: 'Table',

  /* TABLE_COLUMN */
  [STRING.TABLE_COLUMN_ACTIONS]: 'Actions',
  [STRING.TABLE_COLUMN_APPEARANCE]: 'Appearance',
  [STRING.TABLE_COLUMN_AVG_TEMP]: 'Avg temp',
  [STRING.TABLE_COLUMN_COMPLETE]: 'Complete',
  [STRING.TABLE_COLUMN_DATE]: 'Date',
  [STRING.TABLE_COLUMN_DEPLOYMENT]: 'Deployment',
  [STRING.TABLE_COLUMN_DESCRIPTION]: 'Description',
  [STRING.TABLE_COLUMN_DETECTIONS]: 'Detections',
  [STRING.TABLE_COLUMN_DURATION]: 'Duration',
  [STRING.TABLE_COLUMN_ID]: 'ID',
  [STRING.TABLE_COLUMN_IMAGES]: 'Images',
  [STRING.TABLE_COLUMN_MOST_RECENT]: 'Most recent',
  [STRING.TABLE_COLUMN_OCCURRENCES]: 'Occurrences',
  [STRING.TABLE_COLUMN_QUEUED]: 'Queued',
  [STRING.TABLE_COLUMN_SESSION]: 'Session',
  [STRING.TABLE_COLUMN_SESSIONS]: 'Sessions',
  [STRING.TABLE_COLUMN_SPECIES]: 'Species',
  [STRING.TABLE_COLUMN_STATUS]: 'Status',
  [STRING.TABLE_COLUMN_TIME]: 'Time',
  [STRING.TABLE_COLUMN_UNPROCESSED]: 'Unprocessed',

  /* OTHER */
  [STRING.CLOSE]: 'Close',
  [STRING.LOADING_DATA]: 'Loading data',
  [STRING.RUNNING]: 'Running',
  [STRING.SCORE]: 'Score',
  [STRING.SELECT_COLUMNS]: 'Select columns',
  [STRING.SELECT_VALUE]: 'Select a value',
  [STRING.SESSION]: 'Session',
  [STRING.SETTINGS]: 'Settings',
  [STRING.STOPPED]: 'Stopped',
  [STRING.UPDATING_DATA]: 'Updating data',
}

// When we have more translations available, this function could return a value based on current language settings.
export const translate = (key: STRING): string => {
  return ENGLISH_STRINGS[key]
}
