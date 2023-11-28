export interface ArticlesDataType {
  _id: string;
  pub_date: string;
  headline: {
    main: string;
  };
  source: string;
  byline: {
    person: [{ firstname: string }];
  };
  like: boolean;
  web_url: string;
  abstract: string;
}

export interface CountryDataType {
  id: number;
  name: string;
  value: string[];
}

export interface TextListType {
  title: string;
  date: string;
  country: CountryDataType[];
  hasValue: boolean;
}
