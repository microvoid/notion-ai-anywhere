import {
  Bars2Icon,
  Bars4Icon,
  BarsArrowDownIcon,
  BoltIcon,
  ChartPieIcon,
  CheckIcon,
  ClipboardDocumentIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  LanguageIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  SparklesIcon
} from "@heroicons/react/24/outline"

export interface ISelectionOption {
  label: string
  icon?: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
  value: string
  options?: {
    label: string
    value: string
  }[]
}

export interface ISelectionOptionMap {
  label: string
  list: ISelectionOption[]
}

export enum PromptTypeEnum {
  TopicWriting = "topicWriting",
  HelpMeWrite = "helpMeWrite",
  ContinueWriting = "continueWriting",
  ChangeTone = "changeTone",
  Summarize = "summarize",
  ImproveWriting = "improveWriting",
  FixSpellingGrammar = "fixSpellingGrammar",
  Translate = "translate",
  ExplainThis = "explainThis",
  MakeLonger = "makeLonger",
  MakeShorter = "makeShorter",
  FindActionItems = "findActionItems",
  SimplifyLanguage = "simplifyLanguage"
}

export enum ToneEnum {
  professional = "professional",
  casual = "casual",
  straightforward = "straightforward",
  confident = "confident",
  friendly = "friendly"
}

export const ToneOptions = [
  {
    label: "Professional",
    value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.professional}`
  },
  {
    label: "Casual",
    value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.casual}`
  },
  {
    label: "Straightforward",
    value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.straightforward}`
  },
  {
    label: "Confident",
    value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.confident}`
  },
  {
    label: "Friendly",
    value: `${PromptTypeEnum.ChangeTone}-${ToneEnum.friendly}`
  }
]

export const EditOrReviewSelectionMap: ISelectionOptionMap = {
  label: "Edit or review selection",
  list: [
    {
      icon: BoltIcon,
      label: "Improve writing",
      value: PromptTypeEnum.ImproveWriting
    },
    {
      icon: CheckIcon,
      label: "Fix spelling & grammar",
      value: PromptTypeEnum.FixSpellingGrammar
    },
    {
      icon: Bars2Icon,
      label: "Make shorter",
      value: PromptTypeEnum.MakeShorter
    },
    {
      icon: Bars4Icon,
      label: "Make longer",
      value: PromptTypeEnum.MakeLonger
    },
    {
      icon: SparklesIcon,
      label: "Simplify language",
      value: PromptTypeEnum.SimplifyLanguage
    },
    {
      icon: ChartPieIcon,
      label: "Change tone",
      value: PromptTypeEnum.ChangeTone,
      options: ToneOptions
    }
  ]
}

export enum LanguageEnum {
  english = "english",
  korean = "korean",
  chinese = "chinese",
  japanese = "japanese",
  spanish = "spanish",
  russian = "russian",
  french = "french",
  german = "german",
  italian = "italian",
  portuguese = "portuguese",
  dutch = "dutch",
  indonesia = "indonesia",
  tagalog = "tagalog",
  vietnamese = "vietnamese"
}

export const LanguageOptions = [
  {
    label: "🇺🇸 English",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.english}`
  },
  {
    label: "🇰🇷 Korean",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.korean}`
  },
  {
    label: "🇨🇳 Chinese",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.chinese}`
  },
  {
    label: "🇯🇵 Japanese",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.japanese}`
  },
  {
    label: "🇪🇸 Spanish",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.spanish}`
  },
  {
    label: "🇷🇺 Russian",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.russian}`
  },
  {
    label: "🇫🇷 French",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.french}`
  },
  {
    label: "🇩🇪 German",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.german}`
  },
  {
    label: "🇮🇹 Italian",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.italian}`
  },
  {
    label: "🇵🇹 Portuguese",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.portuguese}`
  },
  {
    label: "🇳🇱 Dutch",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.dutch}`
  },
  {
    label: "🇮🇩 Indonesian",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.indonesia}`
  },
  {
    label: "🇵🇭 Tagalog",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.tagalog}`
  },
  {
    label: "🇻🇳 Vietnamese",
    value: `${PromptTypeEnum.Translate}-${LanguageEnum.vietnamese}`
  }
]

export const GenerateFromSelectionMap: ISelectionOptionMap = {
  label: "Generate from selection",
  list: [
    {
      icon: DocumentTextIcon,
      label: "Summarize",
      value: PromptTypeEnum.Summarize
    },
    {
      icon: LanguageIcon,
      label: "Translate",
      value: PromptTypeEnum.Translate,
      options: LanguageOptions
    },
    {
      icon: QuestionMarkCircleIcon,
      label: "Explain this",
      value: PromptTypeEnum.ExplainThis
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      label: "Find action items",
      value: PromptTypeEnum.FindActionItems
    }
  ]
}

export const WriteWithAIMap: ISelectionOptionMap = {
  label: "Write with AI",
  list: [
    {
      icon: PencilIcon,
      label: "Continue writing",
      value: PromptTypeEnum.ContinueWriting
    }
  ]
}
export enum DraftWithAIEnum {
  brainstormIdeas = "brainstormIdeas",
  blogPost = "blogPost",
  outline = "outline",
  socialMediaPost = "socialMediaPost",
  pressRelease = "pressRelease",
  creativeStory = "creativeStory",
  essay = "essay",
  poem = "poem",
  meetingAgenda = "meetingAgenda",
  prosConsList = "prosConsList",
  jobDescription = "jobDescription",
  salesEmail = "salesEmail",
  recruitingEmail = "recruitingEmail"
}

export const DraftWithAIMap: ISelectionOptionMap = {
  label: "Draft with AI",
  list: [
    {
      icon: PencilIcon,
      label: "Brainstorm Ideas",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.brainstormIdeas}`
    },
    {
      icon: PencilIcon,
      label: "Blog Post",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.blogPost}`
    },
    {
      icon: PencilIcon,
      label: "Outline",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.outline}`
    },
    {
      icon: PencilIcon,
      label: "Social Media Post",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.socialMediaPost}`
    },
    {
      icon: PencilIcon,
      label: "Press Release",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.pressRelease}`
    },
    {
      icon: PencilIcon,
      label: "Creative Story",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.creativeStory}`
    },
    {
      icon: PencilIcon,
      label: "Essay",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.essay}`
    },
    {
      icon: PencilIcon,
      label: "Poem",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.poem}`
    },
    {
      icon: PencilIcon,
      label: "Meeting Agenda",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.meetingAgenda}`
    },
    {
      icon: PencilIcon,
      label: "Pros Cons List",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.prosConsList}`
    },
    {
      icon: PencilIcon,
      label: "Job Description",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.jobDescription}`
    },
    {
      icon: PencilIcon,
      label: "Sales Email",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.salesEmail}`
    },
    {
      icon: PencilIcon,
      label: "Recruiting Email",
      value: `${PromptTypeEnum.TopicWriting}-${DraftWithAIEnum.recruitingEmail}`
    }
  ]
}

export enum HandleResultEnum {
  ReplaceSelection = "ReplaceSelection",
  InsertBelow = "InsertBelow",
  Copy = "Copy"
}

export const HandleResultMap: ISelectionOptionMap = {
  label: "Handle result",
  list: [
    {
      icon: CheckIcon,
      label: "Replace selection",
      value: HandleResultEnum.ReplaceSelection
    },
    {
      icon: BarsArrowDownIcon,
      label: "Insert below",
      value: HandleResultEnum.InsertBelow
    },
    {
      icon: ClipboardDocumentIcon,
      label: "Copy",
      value: HandleResultEnum.Copy
    }
  ]
}
