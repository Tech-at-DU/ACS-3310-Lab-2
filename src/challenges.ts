export function toTitleCase(text: string): string {
  throw new Error("Not implemented")
}

export function totalPrice(items: { price: number }[]): number {
  throw new Error("Not implemented")
}

export function last<T>(arr: T[]): T | undefined {
  throw new Error("Not implemented")
}

export function filterBy<T>(arr: T[], fn: (item: T) => boolean): T[] {
  throw new Error("Not implemented")
}

export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  throw new Error("Not implemented")
}

export function applyTwice(value: number, fn: (n: number) => number): number {
  throw new Error("Not implemented")
}
