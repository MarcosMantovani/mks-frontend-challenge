import { RenderOptions, render } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { AppStore, RootState, configuratedStore } from '../store'

type OptionalPreloadedState = Partial<RootState>

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: OptionalPreloadedState
  store?: AppStore
}

export function renderWithProvider(
  element: React.ReactElement,
  {
    preloadedState = {},
    store = configuratedStore(preloadedState as RootState),
    ...additionalOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(element, {
      wrapper: Wrapper,
      ...additionalOptions
    })
  }
}
