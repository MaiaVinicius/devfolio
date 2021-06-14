interface Project {
  title: string;
  description: string;
  languages: Array<Language>,
  buttons: Array<Button>;
}

export interface Button {
  url: string;
  name: string;
}


export interface Language {
  name: string;
}

export default Project;
