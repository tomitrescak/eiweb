declare var global: any;

interface Function {
  displayName: string;
}

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

interface String {
  toUrlName(): string;
  hashCode(): number;
  toId(): string;
}

interface Indexable<T> {
  [index: string]: T;
}

interface Group<T> { key: string; values: T[], hasMore?: boolean }