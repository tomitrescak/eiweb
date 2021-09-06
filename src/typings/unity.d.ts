declare class UnityObject2 {
  constructor(param: any);

  observeProgress(...params: any[]);
  initPlugin(...params: any[]);
  installPlugin(...params: any[]);
};

declare class UnityLoader {
  static instantiate(...props: any[]);
}

declare var jQuery: any;