export interface ComponentController {
  (el: HTMLDivElement): {
    mount: () => void
    unmount: () => void
  }
}

export interface Registry {
  define: (id: string, controller: ComponentController) => void
  whenDefined: (id: string) => Promise<ComponentController>
  isDefined: (id: string) => boolean
  get: (id: string) => ComponentController | undefined
}

declare global {
  interface Window {
    registry: Registry
  }
}
