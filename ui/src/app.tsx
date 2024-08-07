import * as Portal from '@radix-ui/react-portal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import classNames from 'classnames'
import { ErrorBoundary } from 'components/error-boundary/error-boundary'
import { Header } from 'components/header/header'
import { Menu } from 'components/menu/menu'
import { useProjectDetails } from 'data-services/hooks/projects/useProjectDetails'
import { Auth } from 'pages/auth/auth'
import { Login } from 'pages/auth/login'
import { SignUp } from 'pages/auth/sign-up'
import { CollectionDetails } from 'pages/collection-details/collection-details'
import { Deployments } from 'pages/deployments/deployments'
import { Jobs } from 'pages/jobs/jobs'
import { Occurrences } from 'pages/occurrences/occurrences'
import Overview from 'pages/overview/overview'
import { Projects } from 'pages/projects/projects'
import SessionDetails from 'pages/session-details/session-details'
import { Sessions } from 'pages/sessions/sessions'
import { Species } from 'pages/species/species'
import { UnderConstruction } from 'pages/under-construction/under-construction'
import { useContext, useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom'
import {
  BreadcrumbContext,
  BreadcrumbContextProvider,
} from 'utils/breadcrumbContext'
import { APP_ROUTES } from 'utils/constants'
import { STRING, translate } from 'utils/language'
import { usePageBreadcrumb } from 'utils/usePageBreadcrumb'
import { UserContextProvider } from 'utils/user/userContext'
import { UserInfoContextProvider } from 'utils/user/userInfoContext'
import styles from './app.module.scss'

const queryClient = new QueryClient()

const APP_CONTAINER_ID = 'app'
const INTRO_CONTAINER_ID = 'intro'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <UserInfoContextProvider>
          <BreadcrumbContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <div id={APP_CONTAINER_ID} className={styles.wrapper}>
              <div id={INTRO_CONTAINER_ID}>
                <Header />
              </div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Navigate
                      to={{
                        pathname: 'projects',
                        search: location.search,
                      }}
                      replace={true}
                    />
                  }
                />
                <Route path="auth" element={<AuthContainer />}>
                  <Route path="login" element={<Login />} />
                  <Route path="sign-up" element={<SignUp />} />
                </Route>
                <Route path="projects" element={<ProjectsContainer />} />
                <Route
                  path="projects/:projectId"
                  element={<ProjectContainer />}
                >
                  <Route path="" element={<Overview />} />
                  <Route path="jobs/:id?" element={<Jobs />} />
                  <Route path="deployments/:id?" element={<Deployments />} />
                  <Route path="sessions" element={<Sessions />} />
                  <Route path="sessions/:id" element={<SessionDetails />} />
                  <Route path="occurrences/:id?" element={<Occurrences />} />
                  <Route path="species/:id?" element={<Species />} />
                  <Route
                    path="collections/:id"
                    element={<CollectionDetails />}
                  />
                  <Route path="*" element={<UnderConstruction />} />
                </Route>
              </Routes>
            </div>
          </BreadcrumbContextProvider>
        </UserInfoContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}

const AuthContainer = () => (
  <main className={classNames(styles.main, styles.fullscreen)}>
    <Auth>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </Auth>
  </main>
)

const ProjectsContainer = () => {
  usePageBreadcrumb({
    title: translate(STRING.NAV_ITEM_PROJECTS),
    path: APP_ROUTES.HOME,
  })

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
      </div>
    </main>
  )
}

const ProjectContainer = () => {
  const { projectId } = useParams()
  const projectDetails = useProjectDetails(projectId as string)
  const { setProjectBreadcrumb } = useContext(BreadcrumbContext)

  usePageBreadcrumb({
    title: translate(STRING.NAV_ITEM_PROJECTS),
    path: APP_ROUTES.HOME,
  })

  useEffect(() => {
    setProjectBreadcrumb({
      title: projectDetails.project?.name ?? '',
      path: APP_ROUTES.PROJECT_DETAILS({ projectId: projectId as string }),
    })

    return () => {
      setProjectBreadcrumb(undefined)
    }
  }, [projectDetails.project])

  useEffect(() => {
    const meta = document.getElementsByTagName('meta').namedItem('description')
    const newDescription = projectDetails.project?.description
    const prevDescription = meta?.content

    if (meta && newDescription) {
      meta.content = newDescription
    }

    return () => {
      if (meta && prevDescription) {
        meta.content = prevDescription
      }
    }
  }, [projectDetails.project])

  return (
    <>
      <Portal.Root container={document.getElementById(INTRO_CONTAINER_ID)}>
        <Menu />
      </Portal.Root>
      <main className={styles.main}>
        <div className={styles.content}>
          <ErrorBoundary>
            <Outlet context={projectDetails} />
          </ErrorBoundary>
        </div>
      </main>
    </>
  )
}
