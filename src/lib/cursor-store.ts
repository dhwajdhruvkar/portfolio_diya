/**
 * Minimal external store for the custom cursor. A module-level store avoids
 * wrapping the whole tree in a provider just so a leaf can say "I'm hoverable".
 */

export type CursorState = {
  active: boolean;
  label: string | null;
};

const initial: CursorState = { active: false, label: null };

let state: CursorState = initial;
const listeners = new Set<(next: CursorState) => void>();

export function getCursorState(): CursorState {
  return state;
}

export function getCursorServerState(): CursorState {
  return initial;
}

export function setCursorState(next: CursorState) {
  if (state.active === next.active && state.label === next.label) return;
  state = next;
  for (const listener of listeners) listener(state);
}

export function resetCursorState() {
  setCursorState(initial);
}

export function subscribeCursor(listener: (next: CursorState) => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
