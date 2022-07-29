export type Person = {
  [key: string]: string | number;
  title: string;
  bodyWidth: number;
};
export type TestType = {
  label: string;
  group: string;
};

export type QuarterlyType = {
  ResultType: string;
  percent: string;
};

export type MockType = {
  points: {
    ResultType: string;
    StartValue: number;
    EndValue: number;
    Decimals: number;
  };
  quarter: {
    year: string;
    season: string;
  };
  weight: Array<QuarterlyType>;
};
