export interface CustomContainer {
  bodyBackgroundColor?: string;
  primaryFontFamily?: string;
  buttonColor?: string;
}

export interface CustomDial {
  dialBackgroundColor?: string;
  dialInactiveColor?: string;
  dialActiveColor?: string;
  dialEditableActiveColor?: string;
  dialEditableBackgroundColor?: string;
}

export interface CustomClock{
  clockFaceTimeActiveColor?: string;
  clockFaceTimeInactiveColor?: string;
  clockFaceInnerTimeInactiveColor?: string;
  clockFaceTimeDisabledColor?: string;
  clockFaceBackgroundColor?: string;
  clockHandColor?: string;
}
export interface CustomTimepickerTheme {
  container?: CustomContainer;
  dial?: CustomDial;
  clockFcae?: CustomClock
}
